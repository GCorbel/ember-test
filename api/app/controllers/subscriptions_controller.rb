class SubscriptionsController < ApplicationController
  include CrudConcern

  before_filter :require_login, except: [:create, :show, :update]

  def create
    token = params[:subscription].delete(:stripe_token)
    super do |subscription|
      course = Course.find(params[:subscription][:course_id])

      customer = Stripe::Customer.create(
        source: token,
        description: course.name
      )

      subscription.stripe_client_id = customer.id
      subscription.due_amount = course.price
      subscription.nb_recurrences = 1
      PaymentWorker.perform_async(subscription.id)
    end
  end
end
