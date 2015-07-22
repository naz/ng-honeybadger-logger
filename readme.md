[![Build Status](https://travis-ci.org/Gargol/ng-honeybadger-logger.svg?branch=master)](https://travis-ci.org/Gargol/ng-honeybadger-logger)
[![Coverage Status](https://coveralls.io/repos/Gargol/ng-honeybadger-logger/badge.svg?branch=master&service=github)](https://coveralls.io/github/Gargol/ng-honeybadger-logger?branch=master)

# ng-honeybadger-logger
ng-honeybadger-logger is an [AngularJS](https://angular.io/) module that helps integrating :zap: [Honeybadger](http://honeybadger.io/) logger into your angular app.

#Getting Started
Install `ng-honeybadger-logger` package via npm:
```bash
npm install ng-honeybadger-logger
```

Follow standard [installation procedure](https://github.com/honeybadger-io/honeybadger-js#installation) of Honeybadger.

Include the script with `Honeybadger` and `ng-honeybadger-logger` module on your page:
```html
<script src="//js.honeybadger.io/v0.2/honeybadger.min.js" type="text/javascript"></script>
<script src='path/to/ng-honeybadger-logger.min.js' type='text/javascript'></script>

```

Make sure that your app has `ng-honeybadger-logger` specified as a dependent module:

```javascript
angular
  .module('myApp', [
    'ng-honeybadger-logger'
  ]);
```

Enjoy painless logging to :zap: `Honeybadger`

#Development
Install all needed node modules with `nmp install`.
Run `gulp test` to verify any changes.

#License
MIT © [Nazar Gargol](http://nazargargol.com). See the LICENSE file for more details.
