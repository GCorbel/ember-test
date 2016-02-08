class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods
  def self.helper_method(*args)
  end
  def self.hide_action(*args)
  end

  include Clearance::Controller

  def token_authenticate
    authenticate_with_http_token do |token, options|
      @current_admin_user ||= AdminUser.find_by(access_token: token)
    end
  end

  def current_admin_user
    @current_admin_user ||= token_authenticate
  end

  def require_login
    unless token_authenticate
      head :unauthorized
    end
  end

end
