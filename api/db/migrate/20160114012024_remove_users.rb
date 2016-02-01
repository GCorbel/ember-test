class RemoveUsers < ActiveRecord::Migration[5.0]
  def up
    add_column :contacts, :subscription_id, :integer
    add_index :contacts, :subscription_id
  end
end
