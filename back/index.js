const express = require('express');
const cors = require('cors');
const { SERVER_PORT } = require('./env');
const app = express();
const routes = require('./routes')

app.use(cors('*'));
app.use(express.json());

routes(app);

app.listen(SERVER_PORT, () => {
    console.log(`Server running on port ${SERVER_PORT}`)
  })