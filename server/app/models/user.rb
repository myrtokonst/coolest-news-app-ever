class User < ApplicationRecord
    has_many :articles 
    validates :username, presence: true, uniqueness: { case_sensitive: false }

  passwordless_with :username
end
