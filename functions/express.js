const express = require('express');
const router = require('./src/routers');

const app = express();
app.use('/api', router);

app.listen(5022, () =>
  console.info('El servidor está inicializado en el puerto 5022')
);
