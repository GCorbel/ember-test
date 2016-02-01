class User < ActiveRecord::Base
  belongs_to :payment_option
  has_many :subscriptions
  accepts_nested_attributes_for :subscriptions
end
