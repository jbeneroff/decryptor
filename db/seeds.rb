# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all
Cryptocurrency.destroy_all
User.destroy_all

@admin = User.create!(username: 'jbeneroff', email: 'jben@udel.edu', password: '123456')
puts "#{User.count} users created"

@btc = Cryptocurrency.create!(name: 'Bitcoin', symbol: 'BTC', description: 'bitcoin description')
Cryptocurrency.create!(name: 'Ethereum', symbol: 'ETH', description: 'ethereum description')
Cryptocurrency.create!(name: 'Cardano', symbol: 'ADA', description: 'cardano description')
Cryptocurrency.create!(name: 'Binance Coin', symbol: 'BNB', description: 'binance coin description')
Cryptocurrency.create!(name: 'Tether', symbol: 'USDT', description: 'tether description')
Cryptocurrency.create!(name: 'Dogecoin', symbol: 'DOGE', description: 'dogecoin description')

puts "#{Cryptocurrency.count} cryptos created"

Post.create!(content: 'i love bitcoin', user: @admin, cryptocurrency: @btc)

puts "#{Post.count} posts created"
