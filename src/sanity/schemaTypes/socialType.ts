import { SparkleIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const socialType = defineType( {
  name: 'social',
  title: 'Social',
  type: 'document',
  icon: SparkleIcon,
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
      name: 'link',
      type: 'url',
    } ),
  ],
} )
