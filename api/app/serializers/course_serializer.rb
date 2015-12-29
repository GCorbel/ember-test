class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :subscription_ids
end
