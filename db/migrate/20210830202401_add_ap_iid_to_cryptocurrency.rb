class AddApIidToCryptocurrency < ActiveRecord::Migration[6.1]
  def change
    add_column :cryptocurrencies, :api_id, :string
  end
end
