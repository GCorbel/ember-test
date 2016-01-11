require 'spec_helper'

feature 'Users' do
  scenario 'See the list of users' do
    create(:user, email: 'test@test.com')
    login

    visit '/admin/admin_users'

    expect(page).to have_content('test@test.com')
  end
end
