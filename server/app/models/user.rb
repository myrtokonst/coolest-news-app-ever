class User < ApplicationRecord
    has_many :articles 
    validates :username, presence: true, uniqueness: { case_sensitive: false }
    passwordless_with :username
    require 'date'

    # def login_time_in_ms(date)
    #   Time.parse(date).to_i
    # end 

end
