import { client } from '../client'

export default async function getAllProblems() {
  try {
    const {
      data: { problems },
    } = await client.get('/problems')

    return problems
  } catch (error) {
    // TODO: Log error in reporting/alerting system
    console.error(error)
    throw error
  }
}
