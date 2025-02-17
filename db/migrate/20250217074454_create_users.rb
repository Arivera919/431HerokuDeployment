class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :major
      t.string :email
      t.integer :grad_year
      t.boolean :faculty
      t.text :intro
      t.datetime :available

      t.timestamps
    end
  end
end
