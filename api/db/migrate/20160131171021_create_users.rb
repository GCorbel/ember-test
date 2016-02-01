class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :email
      t.decimal :due_amount, precision: 8, scale: 2, default: 0
      t.decimal :paid_amount, precision: 8, scale: 2, default: 0
      t.boolean :paid
      t.references :payment_option, index: true, foreign_key: true
      t.string :stripe_client_id

      t.timestamps
    end
    add_column :subscriptions, :user_id, :integer
    add_index :subscriptions, :user_id
    add_column :contacts, :user_id, :integer
    add_index :contacts, :user_id
  end
end
