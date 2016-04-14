class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.text :text

      t.timestamps null: false
    end
  end
end

# above migration creates a method named change
# which will be called when you run this migration
# action defined is also reversible.
# when this migration is run it will create an articles table
# with one string column and a textx column
# also creates 2 timestamp fields to allow Rails to track
# article creation and update time