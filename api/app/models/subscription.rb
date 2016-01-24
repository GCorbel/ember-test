class Subscription < ActiveRecord::Base
  has_many :contacts
  belongs_to :course
  belongs_to :payment_option

  validates :course, presence: true
  validates :email, presence: true

  accepts_nested_attributes_for :contacts, allow_destroy: true
end
