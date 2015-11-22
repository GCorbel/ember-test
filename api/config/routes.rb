Rails.application.routes.draw do
  resources :subscriptions, only: :index, defaults: { format: :json }
  resources :courses, defaults: { format: :json }
  resources :users, defaults: { format: :json }
end
