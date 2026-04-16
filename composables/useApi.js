export const useApi = () => {
  const getProductos = async () => {
    const data = await $fetch('https://fakestoreapi.com/products')
    return data
  }

  return { getProductos }
}