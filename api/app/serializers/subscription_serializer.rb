class SubscriptionSerializer < ActiveModel::Serializer
  embed :ids, embed_in_root: false
  attributes :id, :paid, :first_name, :last_name, :comments, :phone
  has_one :course
  has_one :user
end
