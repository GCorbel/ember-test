class SubscriptionSerializer < ActiveModel::Serializer
  embed :ids, embed_in_root: true
  attributes :id, :paid
  belongs_to :user
  belongs_to :course
end
