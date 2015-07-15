describe('ng-honeybadger-logger', function() {
  var loggerModule,
    mockLog;

  beforeEach(function() {
    Honeybadger = jasmine.createSpyObj('honeybadgerMock', ['notify']);
    mockLog = jasmine.createSpyObj('logMock', ['error']);
  });

  beforeEach(function() {
    loggerModule = angular.module('ng-honeybadger-logger');
  });

  beforeEach(function() {
    angular.mock.module('ng-honeybadger-logger', function($injector, $provide) {
      $provide.value('$log', mockLog);
      $provide.decorator('$log', $injector.get('logDecorator'));
    });
  });

  it('should initialize the logger module', function() {
    expect(loggerModule).toBeDefined();
  });

  it('should monkey patch native logger with additional Honeybadger call', inject(function($log) {
    $log.error('test error');

    expect(Honeybadger.notify).toHaveBeenCalledWith('test error');
  }));
});
