require 'rails_helper'

describe DueAmountCalculator do
  describe '#call' do
    it 'gives the sum of courses' do
      course1 = build(:course, price: 14)
      course2 = build(:course, price: 2)
      subscription1 = build(:subscription, course: course1)
      subscription2 = build(:subscription, course: course1)
      subscription3 = build(:subscription, course: course2)

      user = build(:user)
      user.subscriptions = [subscription1, subscription2, subscription3]

      due_amount_calculator = DueAmountCalculator.new(user: user)
      expect(due_amount_calculator.call).to eq 30
    end
  end
end
