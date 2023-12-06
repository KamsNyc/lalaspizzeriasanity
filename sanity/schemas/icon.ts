import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'icon',
  title: 'Icon',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField(
      {
        title: 'Link',
        name: 'link',
        type: 'url'
      }
    ),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
  ],
})
