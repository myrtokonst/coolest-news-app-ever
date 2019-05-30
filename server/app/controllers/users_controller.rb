class UsersController < ApplicationController
    # include Passwordless::ControllerHelpers


    def index
      users = User.all
      render json: users
    end

    def create
     user = User.find_or_create_by(username: params[:user][:username])
      if user
        if user.last_login === nil
          user.last_login = params[:user][:last_login] - 86400000
          user.save
        end
        render json: user
        # else
        #   redirect_to :controller => 'articles', :action => 'good_news', id: user.id
        # end
      else
        render json: {error: "Erorr creating user"}, status: 400
      end
    end

    def update
      user = User.find_by(id: params[:id])
      if user
        user.update(user_params)
        render json: user
      else
        render json: {error: "Could not update"}, status: 404
      end
    end

    def show
      user = User.find_by(id: params[:id])
      if user
        render json: user
      else
        render json: {error: "This user does not exist?"}, status: 404
      end
    end

    # def signin

    # end

    # private

    # def user_params
    #     params.require(:user).permit(:id,)
    # end
end
