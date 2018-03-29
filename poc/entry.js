
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const xmlParser = require('express-xml-bodyparser');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const options = {
    // options will apply to is-type
    type: ['xml'],    //default [ 'xml' ]
    // options will apply to raw-body
    limit: '1mb',
    encoding: 'utf8',
    // options will apply to xml2js
    trim: false
};
app.use(xmlParser(options));

app.use((req, res, next) => {
    console.log(JSON.stringify(
    {
        time: new Date(),
        method: req.method,
        url: req.originalUrl
    }
));
next();
});

app.use((req, res, next) => {
    res.header('Cache-Control', 'no-store');
res.header('Expires', '-1');
res.header('Pragma', 'no-cache');
next();
});
const getRouter = require('./api/saml_parser/routes/routes');
app.use('/api', cors(), getRouter());
const server = app.listen("8080", () => {
    console.log('Application started on port 8080');
});

module.exports = server;
