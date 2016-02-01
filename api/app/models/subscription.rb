class Subscription < ActiveRecord::Base
  has_many :contacts
  belongs_to :course

  validates :course, presence: true

  accepts_nested_attributes_for :contacts, allow_destroy: true
end
