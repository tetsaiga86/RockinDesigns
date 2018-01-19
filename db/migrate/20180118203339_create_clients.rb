class CreateClients < ActiveRecord::Migration[5.0]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :email
      t.boolean :website
      t.boolean :android
      t.boolean :windows
      t.boolean :other
      t.text :description

      t.timestamps
    end
  end
end
