class SubscriptionSerializer < ActiveModel::Serializer
  embed :ids, embed_in_root: false
  attributes :id, :paid
  has_one :course
  has_one :user
end
