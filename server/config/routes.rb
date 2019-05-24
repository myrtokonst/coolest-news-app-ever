Rails.application.routes.draw do
  get '/news', to: 'articles#news' 
  get '/good_news', to: 'articles#good_news' 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'users#show', as: 'user'
end
