class Contact < ActiveRecord::Base
  validates :email, presence: true
  validates :phone, presence: true
  validates :fullname, presence: true
end
