class SessionsController < Clearance::BaseController
  def create
    @user = authenticate(params)

    sign_in(@user) do |status|
      if status.success?
        render json: @user, root: 'user'
      else
        render json: { errors: status.failure_message }, status: :unauthorized
      end
    end
  end

  def destroy
    sign_out
  end
end
