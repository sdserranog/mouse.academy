import getAllCategories from './service/getAllCategories'

export default async function handler(_, res) {
  try {
    const categories = await getAllCategories()
    res.status(200).json({ categories })
  } catch (error) {
    res.status(500).send(error)
  }
}
