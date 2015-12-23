class Subscription < ActiveRecord::Base
  belongs_to :user
  belongs_to :course
  accepts_nested_attributes_for :user

  validates :course, presence: true
end
