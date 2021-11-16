const functions = require('firebase-functions');
const express = require('express');
const router = require('./src/routers');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE',
    );
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api', router);

const runtimeOpts = {
    timeoutSeconds: 300,
    memory: '512MB',
};

exports.app = functions.runWith(runtimeOpts).https.onRequest(app);
