import { createClient } from 'next-sanity'
import type { SanityClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'


export function getClient (): SanityClient {
  return createClient( {
    projectId,
    dataset,
    apiVersion,
    useCdn: true
  } )
}