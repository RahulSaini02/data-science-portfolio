import { ActivityIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const timelineType = defineType( {
  name: 'timeline',
  title: 'Timeline',
  type: 'document',
  icon: ActivityIcon,
  fields: [
    defineField( {
      name: 'title',
      type: 'string',
    } ),
    defineField( {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    } ),
    defineField( {
      name: 'organisation',
      type: 'string',
    } ),
    defineField( {
      name: 'description',
      type: 'string',
    } ),
    defineField( {
      name: 'startdate',
      type: 'date',
    } ),
    defineField( {
      name: 'enddate',
      type: 'date',
    } ),

  ],
} )
