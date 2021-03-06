Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"    

  resource :session, only: [:create, :destroy]
  resources :users, only: [:create]
  resources :logs, only: [:index, :create, :destroy]
end
