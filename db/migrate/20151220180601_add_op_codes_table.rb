class AddOpCodesTable < ActiveRecord::Migration
  def change
    create_table :op_codes do |t|
      t.string :md5
      t.text :php
      t.text :op
    end
  end
end
