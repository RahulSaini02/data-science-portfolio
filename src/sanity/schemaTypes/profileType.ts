import { UserIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const profileType = defineType( {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField( {
      name: 'name',
      type: 'string',
    } ),
    defineField( {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    } ),
    defineField( {
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    } ),
    defineField( {
      name: 'intro',
      type: 'array',
      of: [
        defineArrayMember( {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        } ),
      ],
    } ),
    defineField( {
      name: 'bio',
      type: 'array',
      of: [
        defineArrayMember( {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        } ),
      ],
    } ),
    defineField( {
      name: 'email',
      type: 'string',
    } ),
    defineField( {
      name: 'mobile',
      type: 'string',
    } ),
    defineField( {
      name: 'resume',
      type: 'file',
      options: {
        accept: 'application/pdf',
      }
    } ),
    defineField( {
      name: 'socials',
      type: 'array',
      of: [defineArrayMember( { type: 'reference', to: { type: 'social' } } )],
    } ),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
} )
