'use strict';
const alfy = require('alfy');
const doNotDisturb = require('@sindresorhus/do-not-disturb');

const output = [];

const makeRequest = async input => {
	switch (input) {
		case 'on':
			output.push({
				title: 'Set Do Not Disturb to on',
				arg: 'on'
			});
			break;
		case 'off':
			output.push({
				title: 'Set Do Not Disturb to off',
				arg: 'off'
			});
			break;
		case 'toggle':
			output.push({
				title: 'Toggle Do Not Disturb',
				arg: 'toggle'
			});
			break;
		case 'status':
			output.push({
				title: await doNotDisturb.isEnabled() ? 'Do Not Disturb is on' : 'Do Not Disturb is off',
				arg: 'status'
			});
			break;
		default:
			output.push({
				title: 'Available commands are: On, Off, Toggle, Status',
				arg: 'status'
			});
	}
};

makeRequest(alfy.input.toLowerCase()).then(() => {
	alfy.output(output);
});
