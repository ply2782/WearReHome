const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 3000;
const http = require('http').createServer(app);

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, '../build/index.html'));
});

app.get('*', function (request, response) {
    response.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(3000, function () {
    console.log('listening on 3000')
});