var express = require('express');
var router = express.Router();
var infos = require("../data/infos")

const equipe = infos.equipe
const services = infos.services
const mysql = require('mysql')

const crypto = require('crypto');

var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));



router.get('/', function (req, res, next) {
    res.render('accueil/index', {services : services, equipe : equipe, title: 'AYDOK | Accueil', error: "", logo: "< | >", host: req.hostname });
});

module.exports = router;