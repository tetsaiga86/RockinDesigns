class AddJsonToGithubs < ActiveRecord::Migration[5.0]
  def change
    add_column :githubs, :json, :json
  end
end
