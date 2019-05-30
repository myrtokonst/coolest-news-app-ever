# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all()
Category.destroy_all()
Usecat.destroy_all()

oli= User.create(username:"oliver.grant@gmail.com", last_login:"1558187015177")
ranjit= User.create(username:"ranjit-saimbi@gmail.com", last_login:"1578187015177")
cully= User.create(username:"cully-cullyt@gmail.com", last_login:"1557187011147")
manon= User.create(username:"manon@gmail.com", last_login:"1558187015177")

brexit = Category.create(name: 'brexit')
animals = Category.create(name: 'animals')
tech = Category.create(name: 'tech')
finance = Category.create(name: 'finance')
science = Category.create(name: 'science')
music = Category.create(name: 'music')
art = Category.create(name: 'art')

Usecat.create(user_id: 1, category_id: 1)
Usecat.create(user_id: 1, category_id: 2)
Usecat.create(user_id: 1, category_id: 4)
Usecat.create(user_id: 1, category_id: 6)
Usecat.create(user_id: 2, category_id: 7)
Usecat.create(user_id: 2, category_id: 6)
Usecat.create(user_id: 2, category_id: 4)
Usecat.create(user_id: 3, category_id: 3)
Usecat.create(user_id: 3, category_id: 2)
Usecat.create(user_id: 3, category_id: 1)
Usecat.create(user_id: 4, category_id: 5)
Usecat.create(user_id: 4, category_id: 6)
Usecat.create(user_id: 4, category_id: 7)
