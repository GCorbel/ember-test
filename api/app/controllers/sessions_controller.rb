class SessionsController < Clearance::BaseController
  include Clearance::Authentication
  def create
    admin = authenticate(params)
    sign_in(admin) do |status|
      if status.success?
        render json: AdminUserSerializer.new(admin)
      else
        render json: { errors: status.failure_message }, status: :unauthorized
      end
    end
  end

  def destroy
    current_admin_user.reset_access_token!
  end
end
