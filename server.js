const express = require('express');
const favicon = require('express-favicon')
const path = require('path');
const { static } = require('express');
const port = process.env.port || 3000;
const app = express();
app.use(favicon(__dirname + '/build/favicon/ico'));
app.use(express/static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});
// Activate server
app.listen(port, () => {
    console.log('This app is listening on port ' + port + '!')
   });