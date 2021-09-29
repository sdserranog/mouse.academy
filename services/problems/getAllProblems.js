import { supabase } from 'services/utils/supabase'

export default async function getAllProblems() {
  try {
    let { data, error } = await supabase
      .from('problem')
      .select('id, slug, title, category_id')
    if (error) throw new Error(error)

    return data
  } catch (error) {
    throw new Error(error)
  }
}
