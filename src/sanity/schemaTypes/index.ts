import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { topicType } from './topicType'
import { projectType } from './projectType'
import { profileType } from './profileType'
import { socialType } from './socialType'
import { skillType } from './skillType'
import { timelineType } from './timelineType'
import { certificationType } from './certificationType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, topicType, projectType, profileType, socialType, skillType, timelineType, certificationType],
}
