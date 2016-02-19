class CustomFieldSerializer < ActiveModel::Serializer
  attributes :id, :type, :label, :options

  def type
    object.data['type']
  end

  def label
    object.data['label']
  end

  def options
    object.data['options']
  end
end
