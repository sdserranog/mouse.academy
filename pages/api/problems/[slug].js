import getProblemBySlug from './service/getProblemBySlug'

export default async function handler(req, res) {
  try {
    const { slug } = req.query
    const problem = await getProblemBySlug(slug)
    res.status(200).json({ problem })
  } catch (error) {
    res.status(500).send(error)
  }
}
