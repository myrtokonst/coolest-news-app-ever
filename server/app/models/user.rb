class User < ApplicationRecord
    has_many :articles 
    has_many :usecats
    has_many :categories, through: :usecats
    validates :username, presence: true, uniqueness: { case_sensitive: false }
 
    require 'date'

    # def login_time_in_ms(date)
    #   Time.parse(date).to_i
    # end 
    def ready_to_go_categories
       cats = self.categories.map(&:name)
        cats.join(' OR ')
    end 
end
