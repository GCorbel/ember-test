class SubscriptionsController < ApplicationController
  include CrudConcern

  before_filter :require_login, except: [:create, :show, :update]

  def create
    user = User.new user_attributes
    token = params[:stripe_token]
    customer = Stripe::Customer.create(source: token, description: 'Payment')

    user.due_amount = due_amount(user)
    user.payment_option_id = params[:payment_option]
    user.stripe_client_id = customer.id
    user.save!

    PaymentWorker.perform_async(user.id)
  end

  private

  def user_attributes
    params[:user].permit!
  end

  def due_amount(user)
    @due_amount ||= DueAmountCalculator.new(user: user).call
  end
end
