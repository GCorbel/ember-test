require 'spec_helper'

feature 'Subscription' do
  scenario 'Create a new subscription and pay later' do
    create(:course, name: 'Ember')

    visit '/'
    fill_in 'Email', with: 'test@test.com'
    select 'Ember', from: 'Course'
    click_on 'Submit and pay later'

    expect(page).to have_content('Success')
  end
end
