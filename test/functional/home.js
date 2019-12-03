const assert = require('assert'),
    app = require('../../server'),
    HttpStatus = require('http-status-codes'),
    request = require('request');

const endpoint = `http://localhost:8080/`;

describe('root endpoint', () => {
    it('can get lucky number', done => {
        request.get(endpoint, (err, resp) => {
            assert(!err);
            assert.equal(resp.statusCode, HttpStatus.OK);
            assert(resp.body.indexOf('Hello') !== -1);
            done();
        });
    });
});