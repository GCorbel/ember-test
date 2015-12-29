class CoursesController < ApplicationController
  include CrudConcern
  before_filter :require_login, except: :index
end
