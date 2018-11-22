require('dotenv').config();
const express = require('express');
const app = express();
const appConfig = require('./config/expressConfig');
const port = parseInt(process.env.PORT, 10) || 3000;

const indexRouter = require('./src/routes/indexRouter');
// const emailRouter = require('./src/routes/emailRouter');
const downloadRouter = require('./src/routes/downloadRouter');

// load configurations
appConfig.loadConfigs(app);

// routes
app.use('/', indexRouter);
// app.use('/api/email', emailRouter);
app.use('/download', downloadRouter);

app.listen(port, () => console.log(`Server listening on port ${port}...`));
