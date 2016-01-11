require 'spec_helper'

feature 'Admin Users' do
  scenario 'See the list of admin users' do
    user = AdminUser.create(email: 'test@test.com', password: 'testtest', password_confirmation: 'testtest')
    login(user)

    visit '/admin/admin_users'

    expect(page).to have_content('test@test.com')
  end
end
