class AddStripeClientIdToSubscriptions < ActiveRecord::Migration[5.0]
  def change
    add_column :subscriptions, :stripe_client_id, :string
  end
end
