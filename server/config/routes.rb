Rails.application.routes.draw do
  get '/news', to: 'articles#news' 
  get '/webhose', to: 'articles#webhose' 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
