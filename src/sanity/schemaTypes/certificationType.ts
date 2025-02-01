import { DocumentPdfIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const certificationType = defineType( {
  name: 'certification',
  title: 'Certification',
  type: 'document',
  icon: DocumentPdfIcon,
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
      name: 'certificate',
      type: 'file',
      options: {
        accept: 'application/pdf',
      }
    } ),
    defineField( {
      name: 'featured',
      type: 'boolean',
    } ),
  ],
} )
