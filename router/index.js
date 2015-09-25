'use strict'

const app = require('express')()
const logger = require('../lib/logger')


/**
 * Locals
 */
var db = {};

/**
 * Verbs
 */

app.route('/notas/:id?')

  .all(function(req, res, next) {
    logger.info(req.method, req.path, req.body);
    res.set('Content-Type','application/json');
    next();
  })

  // POST
  .post(function(req, res) {

    // manipulate request
    var notaNueva = req.body.nota;
    notaNueva.id = Date.now();

    // save to storage
    db[notaNueva.id] = notaNueva;

    // response
    res
      .status(201)
      .json({
        nota: db[notaNueva.id]
      });
  })

  // GET
  .get(function(req, res, next) {
    var id = req.params.id;

    if (!id) {
      return next();
    }

    var nota = db[id];

    if (!nota) {
      return res
        .status(404)
        .send({});
    }

    res.json({
      notas: nota
    })
  });

module.exports = app;