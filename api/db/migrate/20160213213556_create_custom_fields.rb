class CreateCustomFields < ActiveRecord::Migration[5.0]
  def change
    create_table :custom_fields do |t|
      t.jsonb :data

      t.timestamps
    end
    add_column :subscriptions, :custom_data, :jsonb
  end
end
