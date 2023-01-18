import {defineType} from 'sanity'

export default defineType({
  name: 'recommandation',
  title: 'Recommandation',
  type: 'document',
  fields: [
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'authorRole',
      title: 'Author Role',
      type: 'string',
    },
    {
      name: 'authorCompany',
      title: 'Author Company',
      type: 'string',
    },
    {
      name: 'authorImage',
      title: 'Author Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'authorDescription',
      title: 'Author Description',
      type: 'text',
    },
  ],
})
