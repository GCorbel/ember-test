class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def create
    user = User.new(user_attributes)
    if user.save
      render json: user
    else
      render status: :unprocessable_entity, json: ErrorSerializer.serialize(user.errors)
    end
  end

  def update
    user = User.find(params[:id])
    if user.update_attributes(user_attributes)
      render json: user
    else
      render status: :unprocessable_entity, json: ErrorSerializer.serialize(user.errors)
    end
  end

  def destroy
    render json: User.find(params[:id]).delete
  end

  private

  def user_attributes
    ActiveModel::Serializer::Adapter::JsonApi::Deserialization.parse(params.to_unsafe_hash)
  end
end
