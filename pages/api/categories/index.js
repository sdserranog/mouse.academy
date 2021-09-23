import getAllCategories from './services/getAllCategories'

export default async function handler(_, res) {
  try {
    const categories = await getAllCategories()
    console.log(categories)
    res.status(200).json({ categories })
  } catch (error) {
    res.status(500).send(error)
  }
}
