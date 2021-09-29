import { client } from '../client'

export default async function getProblemBySlug(slug) {
  try {
    const {
      data: { problem },
    } = await client.get(`/problems/${slug}`)

    return problem
  } catch (error) {
    // TODO: Log error in reporting/alerting system
    console.error(error)
    throw error
  }
}
