class AddInformationToSubscription < ActiveRecord::Migration[5.0]
  def change
    add_column :subscriptions, :due_amount, :integer
    add_column :subscriptions, :paid_amount, :integer
    add_column :subscriptions, :nb_recurrences, :integer
    add_column :subscriptions, :birth_date, :integer
  end
end
