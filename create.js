//create.js: Functional Logic.

define([ "bCheckFile" ], function( bCheckFile ) {
  return function( Input ) {
    var xCode = this;
    return new Promise(function( resolve, reject ) {
      var sMethod = Input;
      var sTestSuite = "test_" + sMethod; 
      var sFunctionLocation = sMethod + "/" + sMethod + ".js";
      var sTestSuiteLocation = sMethod + "/" + sTestSuite + ".js";
      xCode.Snip.render({
        "TemplateType": "function",
        "Options": {
          "Name": sMethod
        },
        "FileName": sFunctionLocation
      }).then(function() {
        return bCheckFile( sFunctionLocation );
      }).then(function( bRendered ) {
        if ( bRendered ) {
          return xCode.Snip.render({
            "TemplateType": "testsuite",
            "Options": {
              "Method": sMethod
            },
            "FileName": sTestSuiteLocation
          });
        } else {
          reject({ message: "Code.create - Error: Failed to render the function." });
        }
      }).then(function() {
        return bCheckFile( sTestSuiteLocation );
      }).then(function( bRendered ) {
        if ( bRendered ) {
          return xCode.addDependency({
            "FileName": "main.js",
            "Dependency": sTestSuite,
            "Export": sTestSuite
          });
        } else {
          reject({ message: "Code.create - Error: Failed to render the test suite." });
        }
      }).then(function( bAddedDependency ) {
        if ( bAddedDependency ) {
          resolve( xCode );
        } else {
          reject({ message: "Code.create - Error: Failed to add the dependency to main.js." });
        }
      }).catch(function( error ) {
        reject( error );
      });
      
      //*/
    });
    //xCode.Snip
    //sMethod

    //create a testsuite
    //create a function
    //Add the testsuite to main's dependencies and exports.
  };
});
