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

ActiveRecord::Schema.define(version: 20160114004837) do

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
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["user_id"], name: "index_contacts_on_user_id", using: :btree
  end

  create_table "courses", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.decimal  "price",      precision: 8, scale: 2
  end

  create_table "subscriptions", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "course_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "paid"
    t.string   "first_name"
    t.string   "last_name"
    t.text     "comments"
    t.string   "phone"
    t.index ["course_id"], name: "index_subscriptions_on_course_id", using: :btree
    t.index ["user_id"], name: "index_subscriptions_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_foreign_key "contacts", "users"
  add_foreign_key "subscriptions", "courses"
  add_foreign_key "subscriptions", "users"
end
