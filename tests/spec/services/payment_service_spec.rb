require 'spec_helper'

describe PaymentService do
  describe '#call' do
    context 'when the subscription doens not have paiment modality' do
      it 'charge subscription that have to pay' do
        course = create(:course)
        subscription = create(:subscription, due_amount: 150, paid_amount: 50,
                              stripe_client_id: '123', course: course,
                              nb_recurrences: 1)

        expect(Stripe::Charge).to receive(:create).
          with(amount: 100, currency: 'cad', customer: '123')

        PaymentService.new(subscription: subscription).call
      end

      it 'updates the due amount' do
        course = create(:course)
        subscription = create(:subscription, due_amount: 150, paid_amount: 50,
                              course: course, nb_recurrences: 1)
        allow(Stripe::Charge).to receive(:create)

        PaymentService.new(subscription: subscription).call

        expect(subscription.due_amount).to eq 150
        expect(subscription).to be_paid
      end
    end

    context 'when the subscription does not have paiment modality' do
      it 'charge in multipe times' do
        course = create(:course)
        subscription = create(:subscription, due_amount: 150, paid_amount: 50,
                              stripe_client_id: '123', course: course,
                              nb_recurrences: 2)

        expect(Stripe::Charge).to receive(:create).
          with(amount: 75, currency: 'cad', customer: '123')

        PaymentService.new(subscription: subscription).call
      end

      it 'updates the due amount' do
        course = create(:course)
        subscription = create(:subscription, due_amount: 150, paid_amount: 50,
                              course: course, nb_recurrences: 2)
        allow(Stripe::Charge).to receive(:create)

        PaymentService.new(subscription: subscription).call

        expect(subscription.paid_amount).to eq 125
        expect(subscription).to_not be_paid

        PaymentService.new(subscription: subscription).call

        expect(subscription.paid_amount).to eq 150
        expect(subscription).to be_paid
      end
    end
  end
end
