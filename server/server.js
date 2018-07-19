const express    = require('express');
const app        = express();
const cors       = require('cors')
const bodyParser = require('body-parser');
const morgan     = require('morgan');
const config     = require('../config');
const colors     = require('colors'); // just for fun

const port = process.env.PORT || config.serverPort;

// cors
app.use(cors());

// acepto url parser
app.use(bodyParser.urlencoded({ extended: true }));
// acepto json
app.use(bodyParser.json());

app.use(require('./routes'));

// console log
app.use(morgan('tiny'));

app.listen(port, () => console.info('Server iniciado en: '+` http://localhost:${port}`.blue));