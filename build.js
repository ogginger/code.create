//build.js: Configuration file for optimizing the ifSetup function. 
/*
*/ 
({
    paths: {
        "fs": "empty:",
        "rsvp": "lib/rsvp.min",
        "underscore": "../lib/underscore.min",
		"addDependency": "lib/addDependency/addDependency",
		"Module": "lib/addDependency/Models/Module/Module",
		"parse": "lib/addDependency/Models/Module/Functions/parse/parse",
		"validate": "lib/addDependency/Models/Module/lib/validate.min",
		"parseValidation": "lib/addDependency/Models/Module/Functions/parse/parseValidation",
		"compose": "lib/addDependency/Models/Module/Functions/compose/compose",
		"composeValidation": "lib/addDependency/Models/Module/Functions/compose/composeValidation",
		"mergeExports": "lib/addDependency/Functions/mergeExports",
		"addDependencyValidation": "lib/addDependency/addDependencyValidation",
		"bDependencyExists": "lib/addDependency/Functions/bDependencyExists",
		"bExportExists": "lib/addDependency/Functions/bExportExists",
		"mergeDependencies": "lib/addDependency/Functions/mergeDependencies",
		"Functions/log": "lib/file/lib/log.min",
        "bCheckFile": "lib/bCheckFile",
        "log": "lib/log.min"
    },
    exclude: [ "underscore", "fs" ],
    name: "create",
    out: "create.min.js"
})
