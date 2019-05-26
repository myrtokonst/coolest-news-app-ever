Rails.application.routes.draw do
  passwordless_for :users
  get '/news', to: 'articles#news' 
  get '/good_news', to: 'articles#good_news' 
  get 'users', to: 'users#index'
end
