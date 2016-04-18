var c = require('rho-contracts'),
    s3BucketName = require('./s3-bucket-name');

var should = require('should');

// For convenience and conciseness.
var good = should.doesNotThrow;
var bad = function (block) { should.throws(block, c.ContractError); };

describe('s3BucketName', function () {

    context('invoked with a good bucket name', function () {
        it('does not raise a contract error', function () {
            good(function () { s3BucketName.check('frodo'); });
        });
    });

    context('invoked with a bad bucket name', function () {
        it('raises a contract error', function () {
            bad(function () { s3BucketName.check('_nope'); });
        });
    });
});
