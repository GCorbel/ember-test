class NewslettersController < ApplicationController
  before_filter :require_login

  def create
    NewslettersMailer.notification(to: emails, body: params[:body]).deliver_now
  end

  private

  def emails
    courses = Course.where(id: params[:course_ids])
      .includes(subscriptions: [:contacts])
    courses.map do |c|
      c.subscriptions.map do |subscription|
        subscription.contacts.map(&:email) + [subscription.email]
      end
    end
  end
end
