Rails.application.routes.draw do
  resources :events
  resources :troops
  resources :user, only: [:create]
  post "authenticate", to: "authentication#authenticate"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
