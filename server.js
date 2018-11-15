const express = require('express');
const app = express();
const appConfig = require('./config/expressConfig');
const port = parseInt(process.env.PORT, 10) || 3000;

const indexRouter = require('./src/routes/indexRouter');

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

// load configurations
appConfig.loadConfigs(app);

// routes
app.use('/', indexRouter);

app.listen(port, () => console.log(`Server listening on port ${port}...`));
