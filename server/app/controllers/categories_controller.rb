class CategoriesController < ApplicationController

    def index
        cats = Category.all
        render json: cats
    end


    def create
        user = User.find_by(id:params[:id])
        params[:cats].map do |cat|
            Category.find_or_create_by(name: cat[:name])
            Usecat.find_or_create_by(category_id: cat[:id], user_id: user.id )
        end
    end
end
