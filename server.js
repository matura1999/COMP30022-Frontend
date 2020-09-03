const express = require('express');
const path = require('path');

const port = process.env.port || 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static('public'));


app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});
// Activate server
app.listen(port, () => {
    console.log('This app is listening on port ' + port + '!')
   });