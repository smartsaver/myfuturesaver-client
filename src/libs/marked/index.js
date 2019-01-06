const marked = require('marked');
const defaultOption = require('./defaultOption');

const processMarkdown = (text, options = defaultOption) => {
  if (!text) return '';

  return marked(text, options);
};

module.exports = processMarkdown;
