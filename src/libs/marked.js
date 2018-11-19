const marked = require('marked');

const renderer = new marked.Renderer();
renderer.link = (href, title, text) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const defaultOption = {
  gfm: true,
  breaks: true,
  renderer
};

const processMarkdown = (text, options = defaultOption) => {
  if (!text) return '';

  return marked(text, options);
};

module.exports = processMarkdown;
