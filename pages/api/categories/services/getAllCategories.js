import { supabase } from 'utils/supabase'

export default async function getAllCategories() {
  try {
    let { data, error } = await supabase.from('Category').select('*')
    if (error) throw new Error(error)

    return data
  } catch (error) {
    throw new Error(error)
  }
}
