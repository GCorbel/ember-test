class RemoveUsers < ActiveRecord::Migration[5.0]
  def up
    remove_column :contacts, :user_id
    remove_column :subscriptions, :user_id
    add_column :contacts, :subscription_id, :integer
    add_index :contacts, :subscription_id
    add_column :subscriptions, :email, :string
    drop_table :users
  end
end
