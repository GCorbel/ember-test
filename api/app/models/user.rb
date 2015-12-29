class User < ActiveRecord::Base
  validates :email, presence: true

  has_many :contacts
  has_many :courses, through: :subscriptions
  has_many :subscriptions
  accepts_nested_attributes_for :contacts
end
