require 'rails_helper'

describe "Newsletters", type: :request do
  it 'sends emails' do
    login

    course = create(:course)
    contact = create(:contact)
    subscription = create(:subscription, course: course)
    subscription.contacts << contact

    post '/newsletters', params: { body: 'test', course_ids: [course.id] }

    expect(ActionMailer::Base.deliveries.length).to eq 1
    mail = ActionMailer::Base.deliveries.first
    expect(mail.body.encoded).to include 'test'
    expect(mail.to).to include contact.email
    expect(mail.to).to include subscription.email
  end
end
