const {exec} = require('child_process');
const packages = require('./packages');

for (const name in packages) {
	const url = packages[name];
	exec(`git clone ${url} packages/${name}`);
}
