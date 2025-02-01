import { CodeIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const skillType = defineType( {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  icon: CodeIcon,
  fields: [
    defineField( {
      name: 'skill',
      type: 'string',
    } ),
    defineField( {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'skill',
      },
    } ),
    defineField( {
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    } ),
  ],
} )
