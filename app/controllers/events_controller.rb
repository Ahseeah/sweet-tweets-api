class EventsController < ApplicationController
  before_action :set_event, only: [:show, :update, :destroy]

  # GET /events
  # GET /events.json
  def index
    @events = Event.all
  end

  # GET /events/1
  # GET /events/1.json
  def show
  end

  # POST /events
  # POST /events.json
  def create
    @event = Event.new(event_params)

    if @event.save
      # make call to twitter here

      TWITTER_CLIENT.update(build_tweet)

      render :show, status: :created, location: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /events/1
  # PATCH/PUT /events/1.json
  def update
    if @event.update(event_params)
      render :show, status: :ok, location: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @event.destroy
  end

  private

  def build_tweet
    map_link = URI.escape("https://www.google.com/maps/place/#{@event.street},#{@event.city},#{@event.state} #{@event.zip_code}")

    "Troop number #{@event.troop.troop_number} will be at #{map_link} with #{@event.thin_mints} boxes of Thin Mints, #{@event.samoas} boxes of Samoas, #{@event.savannah_smiles} boxes of Savannah Smiles and #{@event.tagalongs} boxes of Tagalongs!"
  end

  # def build_tweet
  #   "Troop number #{@event.troop_id} will be at #{@event.street} #{@event.city}, #{@event.state} #{@event.zip_code} with #{@event.thin_mints} boxes of Thin Mints, #{@event.samoas} boxes of Samoas, #{@event.savannah_smiles} boxes of Savannah Smiles and #{@event.tagalongs} boxes of Tagalongs!"
  # end

  # Use callbacks to share common setup or constraints between actions.
  def set_event
    @event = Event.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def event_params
    params.require(:event).permit(:start_time, :end_time, :street, :city, :state, :zip_code, :thin_mints, :samoas, :savannah_smiles, :tagalongs, :troop_id)
  end
end
