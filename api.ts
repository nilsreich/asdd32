import { DICTIONARIES } from './constants'
import { Dictionary } from './types'

export default {
  dictionaries: {
    fetch: async (locale: string | number): Promise<Dictionary> =>
      DICTIONARIES[locale] || DICTIONARIES['default'],
  },
}