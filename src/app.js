const express = require('express');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

const { LoginRouter, UserRouter, CategoryRouter, PostRouter } = require('./routers');

app.use(express.json());
app.use('/login', LoginRouter);
app.use('/user', UserRouter);
app.use('/categories', CategoryRouter);
app.use('/post', PostRouter);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
