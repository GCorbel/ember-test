class ContactsController < ApplicationController
  include CrudConcern
  before_filter :require_login
end
