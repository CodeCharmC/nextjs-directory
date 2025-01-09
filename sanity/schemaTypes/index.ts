import { type SchemaTypeDefinition } from 'sanity'
import { author } from './author'
import { events } from './events'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ author, events],
}
