class CoursesController < ApplicationController
  def index
    render json: Course.all
  end

  def show
    render json: Course.find(params[:id])
  end

  def create
    render json: Course.create(course_attributes)
  end

  def update
    course = Course.find(params[:id])
    course.update_attributes(course_attributes)
    render json: course
  end

  def destroy
    render json: Course.find(params[:id]).delete
  end

  private

  def course_attributes
    ActiveModel::Serializer::Adapter::JsonApi::Deserialization.parse(params.to_unsafe_hash)
  end
end
