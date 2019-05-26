class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :last_login, :articles
end
