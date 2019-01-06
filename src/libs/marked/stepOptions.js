const marked = require('marked');
const defaultOption = require('./defaultOption');

const renderer = new marked.Renderer();
renderer.image = (href, title, text) => `
  <img class="img-fluid" src="${href}" alt="${text}" />
`;


module.exports = {
  ...defaultOption,
  renderer
};
