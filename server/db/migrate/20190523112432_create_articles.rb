class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :text
      t.text :published
      t.string :main_image 
      t.string :url
      t.string :author
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
