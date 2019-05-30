Rails.application.routes.draw do
  get '/news', to: 'articles#news' 
  get '/good_news', to: 'articles#good_news' 
  get '/users', to: 'users#index'
  get '/good_news/:search', to: 'articles#good_news'
  get '/', to: 'users#show', as: 'user'
  post '/users', to: 'users#create'
  get 'cats', to: 'categories#index'
  post 'cats', to: 'categories#create'
end
