# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160204001407) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admin_users", force: :cascade do |t|
    t.string   "email"
    t.string   "password"
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.string   "encrypted_password", limit: 128
    t.string   "confirmation_token", limit: 128
    t.string   "remember_token",     limit: 128
    t.string   "access_token"
    t.index ["email"], name: "index_admin_users_on_email", using: :btree
    t.index ["remember_token"], name: "index_admin_users_on_remember_token", using: :btree
  end

  create_table "contacts", force: :cascade do |t|
    t.string   "fullname"
    t.string   "email"
    t.string   "phone"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "subscription_id"
    t.integer  "user_id"
    t.index ["subscription_id"], name: "index_contacts_on_subscription_id", using: :btree
    t.index ["user_id"], name: "index_contacts_on_user_id", using: :btree
  end

  create_table "courses", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.decimal  "price",      precision: 8, scale: 2
    t.integer  "nb_places"
  end

  create_table "payment_options", force: :cascade do |t|
    t.string   "name"
    t.integer  "recurrencies"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "subscriptions", force: :cascade do |t|
    t.integer  "course_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "paid"
    t.string   "first_name"
    t.string   "last_name"
    t.text     "comments"
    t.string   "phone"
    t.string   "email"
    t.string   "stripe_client_id"
    t.integer  "due_amount"
    t.integer  "paid_amount"
    t.integer  "nb_recurrences"
    t.integer  "birth_date"
    t.integer  "payment_option_id"
    t.integer  "user_id"
    t.index ["course_id"], name: "index_subscriptions_on_course_id", using: :btree
    t.index ["payment_option_id"], name: "index_subscriptions_on_payment_option_id", using: :btree
    t.index ["user_id"], name: "index_subscriptions_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.decimal  "due_amount",        precision: 8, scale: 2, default: "0.0"
    t.decimal  "paid_amount",       precision: 8, scale: 2, default: "0.0"
    t.boolean  "paid"
    t.integer  "payment_option_id"
    t.string   "stripe_client_id"
    t.datetime "created_at",                                                null: false
    t.datetime "updated_at",                                                null: false
    t.index ["payment_option_id"], name: "index_users_on_payment_option_id", using: :btree
  end

  add_foreign_key "subscriptions", "courses"
  add_foreign_key "users", "payment_options"
end
