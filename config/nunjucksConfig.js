const nunjucks = require('nunjucks');

const defaultConfig = {
  autoescape: false
};

module.exports = ({
  app,
  viewDirectory = 'src/views',
  config = defaultConfig
}) => {
  nunjucks.configure(viewDirectory, {
    ...config,
    express: app
  });

  app.set('view engine', 'njk');
};
