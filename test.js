import test from 'ava';
import alfyTest from 'alfy-test';

test('Set on', async t => {
	const alfy = alfyTest();
	const result = await alfy('on');

	t.deepEqual(result, [
		{
			title: 'Set Do Not Disturb to on',
			arg: 'on'
		}
	]);
});

test('Set off', async t => {
	const alfy = alfyTest();
	const result = await alfy('off');

	t.deepEqual(result, [
		{
			title: 'Set Do Not Disturb to off',
			arg: 'off'
		}
	]);
});
