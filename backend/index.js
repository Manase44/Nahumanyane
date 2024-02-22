const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Just initialized the project')
})

app.listen(3001, () => {
    console.log('The server is running successful')
}) 