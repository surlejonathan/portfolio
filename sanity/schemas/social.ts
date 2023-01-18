import {defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social Icon',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
  ],
})
