class CustomFieldsController < ApplicationController
  include CrudConcern
  # before_filter :require_login

  def update
    p attributes
    super
  end

  private

  def attributes
    if params[resource_symbol] && params[resource_symbol].to_unsafe_hash.any?
      {data: params.require(resource_symbol).permit!.to_json}
    else
      {}
    end
  end
end
