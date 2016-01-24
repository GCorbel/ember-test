class PaymentWorker
  include Sidekiq::Worker
  def perform(subscription_id, stripe_token, course_id)
    subscription = Subscription.find(subscription_id)

    Stripe::Charge.create(
      amount: subscription.due_amount,
      currency: "cad",
      customer: customer.id
    )
    subscription.update_attribute('paid_amount', subscription.due_amount)
  end
end
