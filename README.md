rho-cc-s3-bucket-name
=====================

Check S3 bucket names with [rho-contracts][].

[rho-contracts]: https://github.com/bodylabs/rho-contracts.js


Usage
-----

```js

var s3BucketName = require('rho-cc-s3-bucket-name');

// Does not throw.
s3BucketName.check('frodo');

// Throws.
s3BucketName.check('_nope');
```


Installation
------------

```sh
npm install rho-contracts rho-cc-s3-bucket-name
```


Contribute
----------

- Issue Tracker: https://github.com/bodylabs/rho-cc-s3-bucket-name/issues
- Source Code: https://github.com/bodylabs/rho-cc-s3-bucket-name

Pull requests welcome!


Support
-------

If you are having issues, please let us know.


License
-------

The project is licensed under the Mozilla Public License Version 2.0.
