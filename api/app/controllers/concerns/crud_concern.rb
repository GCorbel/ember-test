module CrudConcern
  extend ActiveSupport::Concern

  def index
    render json: { resource_name => klass.all}
  end

  def show
    render json: klass.find(params[:id]), root: resource_name
  end

  def create
    resource = klass.new(attributes)
    if resource.save
      render json: resource, root: resource_name
    else
      render json: ErrorSerializer.serialize(resource),
        status: :unprocessable_entity
    end
  end

  def update
    resource = klass.find(params[:id])
    if resource.update_attributes(attributes)
      render json: resource, root: resource_name
    else
      render json: ErrorSerializer.serialize(resource.errors),
        status: :unprocessable_entity
    end
  end

  def destroy
    render json: klass.find(params[:id]).delete
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
    klass.name.downcase
  end

  def klass
    self.class.name.gsub('Controller','').singularize.constantize
  end
end
