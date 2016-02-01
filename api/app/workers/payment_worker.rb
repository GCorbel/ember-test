class PaymentWorker
  include Sidekiq::Worker
  def perform(user_id)
    user = User.find(user_id)
    PaymentService.new(user: user).call
  end
end
