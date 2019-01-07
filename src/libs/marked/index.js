import marked from 'marked'
import defaultOption from './defaultOption'

const processMarkdown = (text, options = defaultOption) => {
  if (!text) return ''

  return marked(text, options)
}

export default processMarkdown
