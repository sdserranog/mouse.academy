import getAllProblems from './service/getAllProblems'

export default async function handler(req, res) {
  try {
    const problems = await getAllProblems()
    res.status(200).json({ problems })
  } catch (error) {
    res.status(500).send(error)
  }
}
