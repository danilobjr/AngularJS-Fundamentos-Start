'use strict';

var index = require('./index');
var alunosRoutes = require('./alunos');

module.exports = function (app, router) {

    // index/layout page
    app.use('/', index);

    // REST api
    alunosRoutes(router);

    // REST api - prefix for all routes
    app.use('/api', router);
};
