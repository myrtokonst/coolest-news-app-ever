class UsersController < ApplicationController
    # include Passwordless::ControllerHelpers 

    
    def index
      users = User.all
      render json: users
    end
    
    def create
      name = params[:username]
      user = User.find_or_create_by(username: name)
      #user = User.new user_params
      if user
        render json: user
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
  
  
  
    private
  
    def user_params
        params.require(:user).permit(:id)
    end
end
