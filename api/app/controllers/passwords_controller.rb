class PasswordsController < Clearance::BaseController
  def create
    if user = find_user_for_create
      user.forgot_password!
      deliver_email(user)
      render json: user
    else
      render json: { errors: 'Not able to find your user account' }, status: :unprocessable_entity
    end
  end

  def update
    user = find_user_for_update
    if user
      user.password_confirmation = password_reset_params[:password_confirmation]

      if user && user.update_password(password_reset_params[:password])
        sign_in user
        render json: user
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { errors: ['Not able to find your user account'] }, status: :unprocessable_entity
    end
  end

  private

  def deliver_email(user)
    ::ClearanceMailer.change_password(user).deliver_later
  end

  def password_reset_params
    params[:password][:password_reset]
  end

  def find_user_by_id_and_confirmation_token
    Clearance.configuration.user_model.
      find_by_id_and_confirmation_token params[:password][:id], params[:password][:token].to_s
  end

  def find_user_for_create
    Clearance.configuration.user_model.
      find_by_normalized_email params[:password][:email]
  end

  def find_user_for_update
    find_user_by_id_and_confirmation_token
  end
end
