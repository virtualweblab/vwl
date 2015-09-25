'use strict'

const request = require('supertest')
const api = require('../server.js')
const host = process.env.API_TEST_HOST || api

request = request(host)

describe('All users [/users]', function() {

  describe('POST', function() {
    it('should be create user', function(done) {
      var data = {
        "user": {
          "name": "Michael",
          "lastname": "Jackson",
          "type": "",
          "body": ""
        }
      };

      request
        .post('/users')
        .set('Accept', 'application/json')
        .send(data)
        .expect(201)
        .expect('Content-Type', /application\/json/)
        .end(function(err, res) {
          var user

          var body = res.body
          console.log('body', body)

          // User exist
          expect(body).to.have.property('user')
          nota = body.user

          // Propieties
          expect(user).to.have.property('name', 'Michael')
          expect(user).to.have.property('lastname', 'Jackson')
          expect(nota).to.have.property('type', '')
          expect(nota).to.have.property('body', '')
          expect(nota).to.have.property('id')

          done(err)
        })
    })
  })

})
