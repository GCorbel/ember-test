class Course < ActiveRecord::Base
  has_many :subscriptions
end
