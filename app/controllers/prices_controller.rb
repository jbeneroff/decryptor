class PricesController < ApplicationController
  require 'rest-client'

  def get_prices
    url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano%2Cbinancecoin%2Ctether%2Cdogecoin%2Cripple%2Clitecoin%2Cmatic-network%2Cpancakeswap-token&vs_currencies=usd'
    response = RestClient.get(url)
    render json: response
  end
end

# https://www.coingecko.com/en/api/documentation
