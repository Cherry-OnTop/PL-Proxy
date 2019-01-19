const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const proxy = require('http-proxy-middleware');


const app = express();

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}))

// '/:movieId', 

app.use(express.static(__dirname));

app.use('/movie', proxy({
    target: 'http://18.217.66.137'
}));

app.use('/movies', proxy({
    target: 'http://54.146.26.33'
}));

// app.use('/api/booking', proxy({
//     target: 'http://ec2-18-222-217-73.us-east-2.compute.amazonaws.com:3008'
// }))

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});