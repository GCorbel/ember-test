class AddInfoToSubscriptions < ActiveRecord::Migration[5.0]
  def change
    add_column :subscriptions, :first_name, :string
    add_column :subscriptions, :last_name, :string
    add_column :subscriptions, :comments, :text
    add_column :subscriptions, :phone, :string
  end
end
