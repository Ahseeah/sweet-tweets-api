TWITTER_CLIENT = Twitter::REST::Client.new do |config|
  config.consumer_key = Rails.application.credentials.twitter_api_key
  config.consumer_secret = Rails.application.credentials.twitter_api_secret_key
  config.access_token = Rails.application.credentials.twitter_access_token
  config.access_token_secret = Rails.application.credentials.twitter_access_token_secret
end
