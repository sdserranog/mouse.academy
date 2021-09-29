import { supabase } from 'services/utils/supabase'

export default async function getAllProblems(slug) {
  try {
    let { data, error } = await supabase
      .from('problem')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error) throw new Error(error)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
