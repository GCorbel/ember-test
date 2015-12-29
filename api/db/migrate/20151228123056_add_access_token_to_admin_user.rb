class AddAccessTokenToAdminUser < ActiveRecord::Migration[5.0]
  def change
    add_column :admin_users, :access_token, :string

    AdminUser.all.each(&:reset_access_token!)
  end
end
