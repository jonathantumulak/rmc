// Set the production flag.
global.IS_PRODUCTION = (process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'production');

function useES6() {
	// All of ES6 works, so just run straight from source.
	require('./src').main();
}

function useES5() {
	// Check whether this is a production environment.
	if (IS_PRODUCTION) {
		// Production, so run the pre-transpiled code.
		// Add the lib folder as a path for imports.
		require('app-module-path').addPath(__dirname + '/lib/lib');

		// Include polyfills.
		require('babel-polyfill');

		// Start running.
		require('./lib').main();
	} else {
		// Not production, so run the non-transpiled code.
		// Add the lib folder as a path for imports.
		require('app-module-path').addPath(__dirname + '/src/lib');

		// Transpile from ES6 to ES5.
		require('babel-register');

		// Include polyfills.
		require('babel-polyfill');

		// Start running.
		useES6();
	}
}

// No full ES6 support in Node yet, so default to ES5.
useES5();
