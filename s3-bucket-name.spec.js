var s3BucketName = require('./s3-bucket-name');

var should = require('should');

describe('s3BucketName', function () {

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
