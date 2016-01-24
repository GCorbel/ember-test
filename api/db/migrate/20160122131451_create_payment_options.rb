class CreatePaymentOptions < ActiveRecord::Migration[5.0]
  def change
    create_table :payment_options do |t|
      t.string :name
      t.integer :recurrencies

      t.timestamps
    end
    add_column :subscriptions, :payment_option_id, :integer
    add_index :subscriptions, :payment_option_id
  end
end
