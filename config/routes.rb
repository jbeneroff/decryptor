Rails.application.routes.draw do
  resources :comments
  resources :posts
  resources :cryptocurrencies
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create

  get '/prices', to: 'prices#get_prices'
  resources :prices, only: :get
end
