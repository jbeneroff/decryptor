class Post < ApplicationRecord
  belongs_to :user
  belongs_to :cryptocurrency
  has_many :comments
end
