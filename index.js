// implement api here
const express = require('express'); // import express framework as function

const server = express();  // use express as server object

const port = 9090;

server.get('/', (req, res) => {
    res.send('hello world');
});

server.get('/now', (req, res) => {
    const now = new Date();
    res.send(now.toString());
});

server.get('api/hubs', (req, res) => {
    debug.hubs.find()
    .then(hubs => {
        res.json(hubs);
    }).catch(err => {
        res.status(500).json({err: message});
    });
});

server.listen(port, () => {   // waiting for request
    console.log(`server is listening on port ${port}`); // response
});

