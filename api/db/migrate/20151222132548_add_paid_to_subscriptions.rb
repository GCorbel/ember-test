class AddPaidToSubscriptions < ActiveRecord::Migration[5.0]
  def change
    add_column :subscriptions, :paid, :boolean
  end
end
