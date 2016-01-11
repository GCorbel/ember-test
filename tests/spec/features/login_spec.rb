require 'spec_helper'

describe 'Login', type: :feature do
  scenario 'Login to the admin part' do
    AdminUser.create!(email: 'test@test.com', password: 'testtest', password_confirmation: 'testtest')

    visit '/registration/login'
    fill_in 'Email', with: 'test@test.com'
    fill_in 'Password', with: 'testtest'
    click_on 'Submit'

    expect(page).to have_content('Subscription')
    expect(current_path).to include 'admin'
  end
end
