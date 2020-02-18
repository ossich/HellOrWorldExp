const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hellow world!');
});

app.get('/ping', (req, res) => {
    res.send('Pong!!!');
});

app.get('/api/', (req, res) => {
    res.send(
    [
        {'name': 1},
        {'name': 2},
        {'name': 3}
    ]);
});

app.listen(3000, () => console.log('Listening on a port 3000...'));
