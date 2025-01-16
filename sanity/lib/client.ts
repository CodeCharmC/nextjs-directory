import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'
import { TrendingUpDown } from 'lucide-react'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, //for cache
})
