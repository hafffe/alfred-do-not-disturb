'use strict';
const doNotDisturb = require('@sindresorhus/do-not-disturb');

const command = process.argv[2];

(async () => {
	switch (command) {
		case 'on':
			await doNotDisturb.enable();
			break;
		case 'off':
			await doNotDisturb.disable();
			break;
		case 'toggle':
			await doNotDisturb.toggle();
			break;
		default:
			return null;
	}
})();
