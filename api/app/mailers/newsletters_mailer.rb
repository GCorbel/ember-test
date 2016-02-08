class NewslettersMailer < ActionMailer::Base
  default from: 'info@optik360.com'

  def notification(to: to, body: body)
    mail to: to, body: body
  end
end
