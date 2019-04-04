require 'test_helper'

class TroopsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @troop = troops(:one)
  end

  test "should get index" do
    get troops_url, as: :json
    assert_response :success
  end

  test "should create troop" do
    assert_difference('Troop.count') do
      post troops_url, params: { troop: { troop_number: @troop.troop_number } }, as: :json
    end

    assert_response 201
  end

  test "should show troop" do
    get troop_url(@troop), as: :json
    assert_response :success
  end

  test "should update troop" do
    patch troop_url(@troop), params: { troop: { troop_number: @troop.troop_number } }, as: :json
    assert_response 200
  end

  test "should destroy troop" do
    assert_difference('Troop.count', -1) do
      delete troop_url(@troop), as: :json
    end

    assert_response 204
  end
end
