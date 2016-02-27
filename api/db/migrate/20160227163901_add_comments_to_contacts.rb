class AddCommentsToContacts < ActiveRecord::Migration[5.0]
  def change
    add_column :contacts, :comments, :text
  end
end
