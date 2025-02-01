import { ProjectsIcon, LinkIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const projectType = defineType( {
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: ProjectsIcon,
  fields: [
    defineField( {
      name: 'title',
      type: 'string',
    } ),
    defineField( {
      name: 'context',
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
      name: 'author',
      type: 'reference',
      to: { type: 'profile' },
    } ),
    defineField( {
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    } ),
    defineField( {
      name: 'featured',
      type: 'boolean',
    } ),
    defineField( {
      name: 'topics',
      type: 'array',
      of: [defineArrayMember( { type: 'reference', to: { type: 'topic' } } )],
    } ),
    defineField( {
      name: 'publishedAt',
      type: 'datetime',
    } ),
    defineField( {
      name: 'body',
      type: 'blockContent',
    } ),
    defineField( {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [defineArrayMember( {
        type: 'object',
        icon: LinkIcon,
        fields: [
          defineField( {
            name: 'label',
            title: 'Label',
            type: 'string',
            description: 'The text for the link.',
          } ),
          defineField( {
            name: 'url',
            title: 'URL',
            type: 'url',
            description: 'The URL to link to.',
            validation: ( Rule ) =>
              Rule.uri( {
                scheme: ['http', 'https', 'mailto', 'tel'],
              } ),
          } ),
        ]
      } )],
    } ),
  ],
  preview: {
    select: {
      title: 'title',
      profile: 'profile.name',
      media: 'mainImage',
    },
    prepare ( selection ) {
      const { profile } = selection
      return { ...selection, subtitle: profile && `by ${ profile }` }
    },
  },
} )

