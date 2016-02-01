class DueAmountCalculator
  attr_accessor :user

  def initialize(user:)
    @user = user
  end

  def call
    user.subscriptions.map { |s| s.course.price }.sum
  end
end
