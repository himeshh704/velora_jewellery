import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './product'
import { categoryType } from './category'
import { homeType } from './home'
import about from './about'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, categoryType, homeType, about],
}
