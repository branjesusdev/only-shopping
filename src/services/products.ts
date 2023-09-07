import { OutProducts } from '@/models/OutProducts.interface'
import { PRODUCTS_ENDPOINT } from '@/environments/environment'

export const getProducts = async () : Promise<OutProducts> => {
  try {
    const res = await fetch(PRODUCTS_ENDPOINT)
    const data = await res.json()
    return data
  } catch (_) {
    return { code : 404, message : 'Error al obtener la información', products: [] }
  }
}