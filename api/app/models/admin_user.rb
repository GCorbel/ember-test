class AdminUser < ActiveRecord::Base
  include Clearance::User

  validates :password, confirmation: true
  before_create :reset_access_token

  def reset_access_token
    begin
      self.access_token = SecureRandom.base64(64)
    end while self.class.exists?(access_token: access_token)
  end

  def reset_access_token!
    reset_access_token
    save
  end
end
