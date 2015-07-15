(function() {
  'use strict';

  angular
    .module('ng-honeybadger-logger', []);

  angular
    .module('ng-honeybadger-logger')
    .config(configureLogger);

  configureLogger.$inject = ['$provide'];

  function configureLogger($provide) {
    $provide.constant('logDecorator', logDecorator);

    $provide.decorator('$log', logDecorator);

    logDecorator.$inject = ['$delegate'];

    function logDecorator($delegate) {
      var errorFn = $delegate.error;
      $delegate.error = function(e) {
        /*global Honeybadger: true*/
        Honeybadger.notify(e);
        errorFn.apply(null, arguments);
      };

      return $delegate;
    }
  }
}());
