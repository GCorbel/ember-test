Rails.application.routes.draw do
  resources :passwords, only: [:create]
  resource :session, controller: "sessions", only: [:create, :destroy]

  resources :users, controller: "clearance/users", only: [] do
    resource :password,
      controller: "clearance/passwords",
      only: [:create, :update]
  end

  patch '/passwords' => 'passwords#update'
  resources :subscriptions, defaults: { format: :json }
  resources :courses, defaults: { format: :json }
  resources :users, defaults: { format: :json }
  resources :admin_users, defaults: { format: :json }
  resources :contacts, defaults: { format: :json }
end
