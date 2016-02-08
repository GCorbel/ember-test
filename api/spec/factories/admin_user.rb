FactoryGirl.define do
  factory :admin_user do
    email 'test@test.com'
    password '12341234'
    password_confirmation '12341234'
  end
end
