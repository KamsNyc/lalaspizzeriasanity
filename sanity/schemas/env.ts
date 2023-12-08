import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'env',
  title: 'Environment',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'Key',
      type: 'string',
    }),
  ],
})
