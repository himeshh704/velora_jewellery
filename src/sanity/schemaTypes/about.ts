import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Our Story',
    }),
    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      initialValue: 'Handcrafting',
    }),
    defineField({
      name: 'heroSubheading',
      title: 'Hero Subheading',
      type: 'string',
      initialValue: 'Since 1995',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'narrativeTitle',
      title: 'Narrative Title',
      type: 'string',
      initialValue: 'The Art of Perfection',
    }),
    defineField({
      name: 'narrativeContent',
      title: 'Narrative Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'narrativeImage',
      title: 'Narrative Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'values',
      title: 'Core Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'description', type: 'text' },
          ],
        },
      ],
    }),
  ],
})
