const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// App variables
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

app.use(express.static('public'));

// Redirect to React app
 app.get('*', (req, res) => {
 	res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
 })

// Activate server
app.listen(PORT, () => {
 console.log('This app is listening on port ' + PORT + '!')
});