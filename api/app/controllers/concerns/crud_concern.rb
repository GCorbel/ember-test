module CrudConcern
  extend ActiveSupport::Concern

  def index
    hash = serialize(klass.all)
    render json: { resource_name => hash }
  end

  def show
    resource = klass.find(params[:id])
    render json: serialize(resource), root: resource_name
  end

  def create
    resource = klass.new(attributes)
    if resource.valid?
      yield(resource) if block_given?
      resource.save
      render json: serialize(resource), root: resource_name
    else
      render json: ErrorSerializer.serialize(resource),
        status: :unprocessable_entity
    end
  end

  def update
    resource = klass.find(params[:id])
    if resource.update_attributes(attributes)
      render json: serialize(resource), root: resource_name
    else
      render json: ErrorSerializer.serialize(resource.errors),
        status: :unprocessable_entity
    end
  end

  def destroy
    render json: serialize(klass.find(params[:id]).delete), root: resource_name
  end

  private

  def attributes
    if params[resource_symbol] && params[resource_symbol].to_unsafe_hash.any?
      params.require(resource_symbol).permit!
    else
      {}
    end
  end

  def resource_symbol
    resource_name.to_sym
  end

  def resource_name
    klass.name.underscore
  end

  def klass
    self.class.name.gsub('Controller','').singularize.constantize
  end

  def serialize(resource)
    ActiveModel::Serializer.serializer_for(resource).new(resource)
  end
end
