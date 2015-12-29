class AddClearanceToAdminUsers < ActiveRecord::Migration
  def self.up
    change_table :admin_users do |t|
      t.string :encrypted_password, limit: 128
      t.string :confirmation_token, limit: 128
      t.string :remember_token, limit: 128
    end

    add_index :admin_users, :email
    add_index :admin_users, :remember_token

    admin_users = select_all("SELECT id FROM admin_users WHERE remember_token IS NULL")

    admin_users.each do |admin_user|
      update <<-SQL
        UPDATE admin_users
        SET remember_token = '#{Clearance::Token.new}'
        WHERE id = '#{admin_user['id']}'
      SQL
    end
  end

  def self.down
    change_table :admin_users do |t|
      t.remove :encrypted_password,:confirmation_token,:remember_token
    end
  end
end
