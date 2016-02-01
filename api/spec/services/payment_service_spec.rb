require 'rails_helper'

describe PaymentService do
  describe '#call' do
    context 'when the user doens not have paiment modality' do
      it 'charge user that have to pay' do
        payment_option = create(:payment_option, recurrencies: 1)
        user = create(:user, due_amount: 150, paid_amount: 50,
                      stripe_client_id: '123', payment_option: payment_option)

        expect(Stripe::Charge).to receive(:create).
          with(amount: 100, currency: 'cad', customer: '123')

        PaymentService.new(user: user).call
      end

      it 'updates the due amount' do
        payment_option = create(:payment_option, recurrencies: 1)
        user = create(:user, due_amount: 150, paid_amount: 50,
                      payment_option: payment_option)
        allow(Stripe::Charge).to receive(:create)

        PaymentService.new(user: user).call

        expect(user.due_amount).to eq 150
        expect(user).to be_paid
      end
    end

    context 'when the user does not have paiment modality' do
      it 'charge in multipe times' do
        payment_option = create(:payment_option, recurrencies: 2)
        user = create(:user, due_amount: 150, paid_amount: 50,
                      stripe_client_id: '123',
                      payment_option: payment_option)

        expect(Stripe::Charge).to receive(:create).
          with(amount: 75, currency: 'cad', customer: '123')

        PaymentService.new(user: user).call
      end

      it 'updates the due amount' do
        payment_option = create(:payment_option, recurrencies: 2)
        user = create(:user, due_amount: 150, paid_amount: 50,
                      payment_option: payment_option)
        allow(Stripe::Charge).to receive(:create)

        PaymentService.new(user: user).call

        expect(user.paid_amount).to eq 125
        expect(user).to_not be_paid

        PaymentService.new(user: user).call

        expect(user.paid_amount).to eq 150
        expect(user).to be_paid
      end
    end
  end
end
