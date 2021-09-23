import { client } from '../client'

export default async function getAllCategories() {
  try {
    const {
      data: { categories },
    } = await client.get('/categories')

    return categories
  } catch (error) {
    // TODO: Log error in reporting/alerting system
    console.error(error)
    throw e
  }
}
