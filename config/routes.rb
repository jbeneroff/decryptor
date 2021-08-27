Rails.application.routes.draw do
  resources :comments
  resources :posts
  resources :cryptocurrencies
  # resources :cryptocurrencies do
  #   resources :posts
  # end
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
  # post '/cryptocurrencies/:cryptocurrency_id/posts', to: 'posts#add_to_cryptocurrency'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
