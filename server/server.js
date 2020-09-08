const express = require('express');
const path = require('path');

// App variables
const PORT = process.env.PORT || 5000;
const publicPath = path.join(__dirname, '..', 'build');
const app = express();

app.use(express.static(publicPath));

// Redirect to React app
 app.get('*', (req, res) => {
 	res.sendFile(path.resolve(publicPath, 'index.html'));
 })

// Activate server
app.listen(PORT, () => {
 console.log('This app is listening on port ' + PORT + '!')
});