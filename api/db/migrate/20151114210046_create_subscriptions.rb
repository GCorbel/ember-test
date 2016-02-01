class CreateSubscriptions < ActiveRecord::Migration
  def change
    create_table :subscriptions do |t|
      t.references :course, index: true, foreign_key: true

      t.timestamps
    end
  end
end
