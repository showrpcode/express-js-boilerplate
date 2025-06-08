const express = require('express');
const apiRoutes = require('../routes');
const { host, port } = require('../config/constants');
const { notFound, errorHanlder, authRequest } = require('../middlewares');
const app = express();
const morgan = require('morgan');
const { default: helmet } = require('helmet');

const appService = {
    init: async () => {
        //  help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately
        app.use(helmet());
        // use to log http request
        app.use(morgan('common')); // combined or common
        // Middleware json
        app.use(express.json());
        // Read url encode special char
        app.use(express.urlencoded({ extended: true }));
        // Middlerware Auth
        app.use(authRequest);
        // Routes
        app.use('/api', apiRoutes);
        // Not found
        app.use(notFound);
        // Error handler
        app.use(errorHanlder);

        app.listen(port, host, function (error) {
            if (error) {
                console.error('something we ring while running server');
            } else {
                console.info(`server run on port ${host}:${port}`);
            }
        })
    }
}

module.exports = appService;