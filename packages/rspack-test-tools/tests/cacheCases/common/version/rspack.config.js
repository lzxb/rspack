const path = require("path");

let version = 1;

/** @type {import("@rspack/core").Configuration} */
module.exports = {
	context: __dirname,
	experiments: {
		cache: {
			type: "persistent",
			snapshot: {
				immutablePaths: [path.join(__dirname, "./file.js")]
			}
		}
	},
	plugins: [
		{
			apply(compiler) {
				compiler.hooks.beforeCompile.tap("Test Plugin", function () {
					compiler.options.experiments.cache.version = String(version);
					version++;
				});
			}
		}
	]
};
