class Course < ActiveRecord::Base
  has_many :subscriptions

  validates :price, presence: true
  validates :nb_places, presence: true
end
