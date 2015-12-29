class UsersController < ApplicationController
  include CrudConcern
  before_filter :require_login
end
