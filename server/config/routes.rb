Rails.application.routes.draw do
  get '/news', to: 'articles#news'
  post '/good_news', to: 'articles#good_news'
  get '/users', to: 'users#index'
  get '/', to: 'users#show', as: 'user'
  post '/users', to: 'users#create'
  get 'cats', to: 'categories#index'
  post 'cats', to: 'categories#create'
end
