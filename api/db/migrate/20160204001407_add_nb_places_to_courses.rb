class AddNbPlacesToCourses < ActiveRecord::Migration[5.0]
  def change
    add_column :courses, :nb_places, :integer
  end
end
