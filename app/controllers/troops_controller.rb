class TroopsController < ApplicationController
  before_action :set_troop, only: [:show, :update, :destroy]

  # GET /troops
  # GET /troops.json
  def index
    @troops = Troop.all
  end

  # GET /troops/1
  # GET /troops/1.json
  def show
  end

  # POST /troops
  # POST /troops.json
  def create
    @troop = Troop.new(troop_params)

    if @troop.save
      render :show, status: :created, location: @troop
    else
      render json: @troop.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /troops/1
  # PATCH/PUT /troops/1.json
  def update
    if @troop.update(troop_params)
      render :show, status: :ok, location: @troop
    else
      render json: @troop.errors, status: :unprocessable_entity
    end
  end

  # DELETE /troops/1
  # DELETE /troops/1.json
  def destroy
    @troop.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_troop
      @troop = Troop.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def troop_params
      params.require(:troop).permit(:troop_number)
    end
end
