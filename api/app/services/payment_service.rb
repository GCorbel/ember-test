class PaymentService
  attr_accessor :user

  def initialize(user:)
    @user = user
  end

  def call
    Stripe::Charge.create(amount: amount, currency: 'cad',
                          customer: user.stripe_client_id)
    user.update_attributes(paid_amount: new_paid_amount, paid: paid?)
  end

  private

  def paid?
    user.due_amount == user.paid_amount + amount
  end

  def new_paid_amount
    @new_amount ||= user.paid_amount + amount
  end

  def amount
    price_recurrence = user.due_amount / user.payment_option.recurrencies
    @amount ||= [price_recurrence, user.due_amount - user.paid_amount].min.to_i
  end
end
