var express = require('express');
var router = express.Router();
const mysql = require('mysql')

const crypto = require('crypto');

var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));



router.get('/', function (req, res, next) {
    res.render('accueil/index', { title: '<|> | Accueil', error: "", logo: "< | >", host: req.hostname });
});

module.exports = router;