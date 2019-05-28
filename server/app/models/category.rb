class Category < ApplicationRecord
    has_many :usecats
    has_many :users, through: :usecats
end
