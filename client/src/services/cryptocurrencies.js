import api from './api-config'

export const getAllCryptocurrencies = async () => {
  const resp = await api.get('/cryptocurrencies')
  return resp.data
}

export const getOneCryptocurrency = async (id) => {
  const resp = await api.get(`/cryptocurrencies/${id}`)
  return resp.data
}
