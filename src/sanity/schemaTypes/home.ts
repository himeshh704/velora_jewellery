import { defineField, defineType } from 'sanity'

export const homeType = defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  groups: [
    {
      name: 'about',
      title: 'About Section',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'string',
      description: 'The main title displayed on the Hero section.',
      initialValue: 'Veloura Jewellery',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      initialValue: 'Timeless Elegance',
    }),
    defineField({
      name: 'heroTitleItalic',
      title: 'Hero Title (Italic Part)',
      type: 'string',
      initialValue: 'latest works',
    }),
    defineField({
      name: 'bentoBlocks',
      title: 'Bento Grid Blocks',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'image', type: 'image', options: { hotspot: true } },
            { name: 'link', type: 'string' },
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'featuredSectionTitle',
      title: 'Featured Detail Section Title',
      type: 'string',
      description: 'Title for the parallax featured section (e.g. The Roseline Ring)',
      initialValue: 'The Roseline Ring',
    }),
    defineField({
      name: 'featuredSectionDescription',
      title: 'Featured Detail Section Description',
      type: 'string',
      initialValue: 'Elegance in Every Detail',
    }),
    defineField({
      name: 'aboutTitle',
      title: 'About Title',
      type: 'string',
      group: 'about',
    }),
    defineField({
      name: 'aboutContent',
      title: 'About Content',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'about',
    }),
    defineField({
      name: 'aboutImage',
      title: 'About Image',
      type: 'image',
      options: { hotspot: true },
      group: 'about',
    }),
  ],
})
