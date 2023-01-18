import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'Job title',
      type: 'string',
    },
    {
      name: 'companyImage',
      title: 'Company Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'companyUrl',
      title: 'Company Url',
      type: 'string',
    },
    {
      name: 'companyDescription',
      title: 'Company description',
      type: 'text',
    },

    {
      name: 'dateStarted',
      title: 'Date started',
      type: 'date',
    },
    {
      name: 'dateEnded',
      title: 'Date ended',
      type: 'date',
    },
    {
      name: 'contractType',
      title: 'Contract Type',
      type: 'string',
    },
    {
      name: 'isCurrentlyWorkingHere',
      title: 'Currently working here ?',
      type: 'boolean',
    },
    {
      name: 'projectDescription',
      title: 'Project Description',
      type: 'string',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    },
    {
      name: 'tasks',
      title: 'Tasks',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
})
