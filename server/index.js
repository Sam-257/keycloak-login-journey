const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  app.get('/auth/realms/master/protocol/openid-connect/token', (req, res) => {
    request(
      { url: 'http://localhost:8080' },
      (error, response, body) => {
        // if (error || response.statusCode !== 200) {
        //   return res.status(500).json({ type: 'error', message: err.message });
        // }
  
        res.json(JSON.parse(body));
      }
    )
  });

// app.get('/api/greeting', (req, res) => {
//   const name = req.query.name || 'World';
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

// app.listen(3001, () =>
//   console.log('Express server is running on localhost:3001')
// );