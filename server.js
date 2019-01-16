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

app.use('/:movieId', express.static(__dirname));

app.use('/movie', proxy({
    target: 'http://ec2-3-17-32-68.us-east-2.compute.amazonaws.com:9008'
}));

// app.use('/api/pictures', proxy({
//     target: 'http://ec2-3-17-163-197.us-east-2.compute.amazonaws.com:5000'
// }));

// app.use('/api/booking', proxy({
//     target: 'http://ec2-18-222-217-73.us-east-2.compute.amazonaws.com:3008'
// }))

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});