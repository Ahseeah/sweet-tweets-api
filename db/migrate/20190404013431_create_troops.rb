class CreateTroops < ActiveRecord::Migration[5.2]
  def change
    create_table :troops do |t|
      t.integer :troop_number

      t.timestamps
    end
  end
end
