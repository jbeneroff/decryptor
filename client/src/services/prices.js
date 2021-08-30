import api from './api-config'

export const getAllPrices = async () => {
  const resp = await api.get('/prices')
  return resp.data
}