class PaymentService
  attr_accessor :subscription

  def initialize(subscription:)
    @subscription = subscription
  end

  def call
    Stripe::Charge.create(amount: amount, currency: 'cad',
                          customer: subscription.stripe_client_id)
    subscription.update_attributes(paid_amount: new_paid_amount, paid: paid?)
  end

  private

  def paid?
    subscription.due_amount == subscription.paid_amount + amount
  end

  def new_paid_amount
    @new_amount ||= subscription.paid_amount + amount
  end

  def amount
    price_recurrence = subscription.due_amount / subscription.nb_recurrences
    @amount ||= [price_recurrence, subscription.due_amount - subscription.paid_amount].min
  end
end
