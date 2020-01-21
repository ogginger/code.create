//test_create.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "create"
], function(
  TestSuite,
  log,
  create
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_create initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "create" );
            
      xTestSuite.test();
    }
  });
});
