def login(user = nil)
  user ||= AdminUser.create(email: 'test@test.com', password: 'testtest', password_confirmation: 'testtest')

  visit '/registration/login'
  fill_in 'Email', with: 'test@test.com'
  fill_in 'Password', with: 'testtest'
  click_on 'Submit'

  expect(page).to have_content('Subscription')
  return user
end
