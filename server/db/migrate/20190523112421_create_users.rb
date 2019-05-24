class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.bigint :last_login
      

      t.timestamps
    end
  end
end
