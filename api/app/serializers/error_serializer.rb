class ErrorSerializer
  def self.serialize(object, errors = {})
    object.errors.each do |k|
      key = k.to_s.split('.').first
      attribute = object.send(key)
      if attribute.kind_of?(ActiveRecord::Associations::CollectionProxy)
        errors[key] = []
        attribute.each_with_index do |item, index|
          errors[key][index] ||= {}
          serialize(item, errors[key][index])
        end
      elsif attribute.kind_of?(ActiveRecord::Base)
        errors[key] = {}
        serialize(attribute, errors[key])
      else
        errors[key] = object.errors[key]
      end
    end
    return {errors: errors}
  end
end
