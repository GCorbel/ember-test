class SubscriptionSerializer < ActiveModel::Serializer
  embed :ids, embed_in_root: false
  attributes :id, :paid, :first_name, :last_name, :comments, :phone, :email,
    :contact_ids, :contacts, :email
  has_one :course, :payment_option
end
