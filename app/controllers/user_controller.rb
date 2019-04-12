class UserController < ApplicationController
  skip_before_action :authenticate_request

  def create
    @user = User.new(user_params)

    if @user.save
      render json: {}, status: 200
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def user_params
    params.permit(:email, :password, :password_confirmation)
  end
end
