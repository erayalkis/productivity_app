class CreateToDos < ActiveRecord::Migration[6.1]
  def change
    create_table :to_dos do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
