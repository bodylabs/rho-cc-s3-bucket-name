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

    it('accepts a single valid label', function () {
        s3BucketName.check('first-label01');
    });

    it('accepts multiple labels', function () {
        s3BucketName.check('first-label01.second-label02');
    });

    it('rejects initial label separator', function () {
        should(function () {
            s3BucketName.check('.first-label01.second-label02');
        }).throw(/Expected s3BucketName/);
    });

    it('rejects initial hyphen', function () {
        should(function () {
            s3BucketName.check('-first-label01.second-label02');
        }).throw(/Expected s3BucketName/);
    });

    it('rejects terminal label separator', function () {
        should(function () {
            s3BucketName.check('first-label01.second-label02.');
        }).throw(/Expected s3BucketName/);
    });
});
