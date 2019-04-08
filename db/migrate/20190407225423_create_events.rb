class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.datetime :start_time
      t.datetime :end_time
      t.string :street
      t.string :city
      t.string :state
      t.string :zip_code
      t.integer :thin_mints
      t.integer :samoas
      t.integer :savannah_smiles
      t.integer :tagalongs
      t.references :troop, foreign_key: true

      t.timestamps
    end
  end
end
