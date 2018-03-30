'use strict';

const express = require('express');
const isOdd = require('is-odd');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    try {
        res.send(JSON.stringify({
            result: isOdd(req.query.number)
        }));
    } catch (error) {
        res.send(JSON.stringify({
            error: 'Error'
        }));
    }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);