class CategoriesController < ApplicationController

    def index 
        cats = Category.all 
        render json: cats 
    end 


    def create 
        
        user = User.all.max_by{|user| user.last_login}
        params[:_json].map do |cat|  
            Category.find_or_create_by(name: cat[:name])
            Usecat.find_or_create_by(category_id: cat[:id], user_id: user.id )
        end    
        redirect_to :controller => 'articles', :action => 'good_news', id: user.id
    end 
end
