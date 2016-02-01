require 'rails_helper'

describe "Subscriptions", type: :request do

  before do
    customer = double(id: 1)
    allow(Stripe::Customer).to receive(:create).and_return(customer)

    due_amount_calculator = double
    allow(due_amount_calculator).to receive(:call).and_return(20)
    allow(DueAmountCalculator).to receive(:new).and_return(due_amount_calculator)
  end

  it 'creates multiple subscriptions' do
    course = create(:course)
    payment_option = create(:payment_option)

    post '/subscriptions', params: subscription_params(course, payment_option)

    expect(User.first.payment_option).to eq payment_option
    expect(Subscription.count).to eq 1
    expect(Subscription.first.contacts.count).to eq 1
    expect(Subscription.first.course).to eq course
  end

  it 'do a payment' do
    course = create(:course)
    payment_option = create(:payment_option)

    expect(Stripe::Customer).to receive(:create).with(source: 'token', description: 'Payment')

    post '/subscriptions', params: subscription_params(course, payment_option)
  end

  it 'creates a new user' do
    course = create(:course, price: 20)
    payment_option = create(:payment_option)

    post '/subscriptions', params: subscription_params(course, payment_option)

    expect(User.count).to eq 1
    expect(User.last.due_amount).to eq 20
  end

  it 'do the first payment' do
    course = create(:course, price: 20)
    payment_option = create(:payment_option)

    expect(PaymentWorker).to receive(:perform_async)
    post '/subscriptions', params: subscription_params(course, payment_option)
  end

  it 'calls the amount calculator' do
    course = create(:course, price: 20)
    payment_option = create(:payment_option)

    due_amount_calculator = double
    expect(due_amount_calculator).to receive(:call).and_return(20)
    expect(DueAmountCalculator).to receive(:new).and_return(due_amount_calculator)

    post '/subscriptions', params: subscription_params(course, payment_option)
    expect(User.last.due_amount).to eq 20
  end

  def subscription_params(course, payment_option)
    {"user"=>{"email"=>"test@test.com", "subscriptions_attributes"=>{"0"=>{"course_id"=>course.id, "email"=>"test@test.com", "birth_date"=>"", "first_name"=>"testtest", "last_name"=>"testtest", "comments"=>"", "phone"=>"", "paid"=>"false", "payment_option_id"=>payment_option.id, "contacts_attributes"=>{"0"=>{"fullname"=>"testtest testtest", "phone"=>"1231231234", "email"=>"cpkoh@aones.com.sg", "_destroy"=>"false", "subscription_id"=>""}}}}}, "stripe_token"=>"token", "payment_option"=>payment_option.id}
  end
end
