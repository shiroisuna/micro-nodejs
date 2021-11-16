const functions = require('firebase-functions');
const express = require('express');
const router = require('./src/routers');

const app = express();
app.use('/api', router);

const runtimeOpts = {
  timeoutSeconds: 300,
  memory: '512MB',
};

exports.app = functions.runWith(runtimeOpts).https.onRequest(app);
