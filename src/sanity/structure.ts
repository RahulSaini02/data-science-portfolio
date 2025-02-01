import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = ( S ) =>
  S.list()
    .title( 'Blog' )
    .items( [
      S.documentTypeListItem( 'profile' ).title( 'Profile' ),
      S.documentTypeListItem( 'project' ).title( 'Projects' ),
      S.documentTypeListItem( 'skill' ).title( 'Skills' ),
      S.documentTypeListItem( 'timeline' ).title( 'Timeline' ),
      S.documentTypeListItem( 'certification' ).title( 'Certifications' ),
      S.divider(),
      S.documentTypeListItem( 'topic' ).title( 'Topics' ),
      S.documentTypeListItem( 'social' ).title( 'Socials' ),
      ...S.documentTypeListItems().filter(
        ( item ) => item.getId() && !['project', 'topic', 'profile', 'social', 'skill', 'timeline', 'certification'].includes( item.getId()! ),
      ),
    ] )
