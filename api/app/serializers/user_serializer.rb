class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :subscription_ids, :contact_ids
end
