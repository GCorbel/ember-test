class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :fullname
      t.string :email
      t.string :phone
      t.references :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end
