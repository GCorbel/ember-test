class SubscriptionsController < ApplicationController
  def index
    render json: Subscription.all, each_serializer: SubscriptionSerializer
  end
end
