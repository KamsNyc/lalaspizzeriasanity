import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import socials from './schemas/socials'
import menu from './schemas/menu'
import icons from './schemas/icon'
import heroImage from './schemas/image'
import env from './schemas/env'
import product from './schemas/product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, socials, menu, icons, heroImage, env],
}
