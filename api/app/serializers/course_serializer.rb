class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :subscription_ids, :nb_places
end
