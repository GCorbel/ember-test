class ContactSerializer < ActiveModel::Serializer
  attributes :id, :email, :fullname, :phone
end
