const express = require('express');
const helmet = require('helmet');

const BusinessRouter = require('./models/business-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/projects', BusinessRouter);

module.exports = server;
