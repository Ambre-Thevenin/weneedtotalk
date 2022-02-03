const questionRouter = require('./questionRouter');

const routes = (app) => {
    app.use('/', questionRouter);
}

module.exports =  routes ;