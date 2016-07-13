var c = require('rho-contracts-fork');

// http://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html
var s3BucketName = c.matches(/^([a-z0-9][-a-z0-9]+)(\.[a-z0-9][-a-z0-9]+)*$/)
    .rename('s3BucketName');

module.exports = s3BucketName;
