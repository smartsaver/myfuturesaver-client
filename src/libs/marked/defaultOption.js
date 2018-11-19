const marked = require('marked');
const renderer = new marked.Renderer();
renderer.link = (href, title, text) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

module.exports = {
  gfm: true,
  breaks: true,
  renderer
};
