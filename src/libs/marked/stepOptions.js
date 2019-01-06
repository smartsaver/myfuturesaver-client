import marked from 'marked'
import defaultOption from './defaultOption'

const renderer = new marked.Renderer()
renderer.image = (href, title, text) => `
  <img class="image" src="${href}" alt="${text}" />
`

export default {
  ...defaultOption,
  renderer,
}
