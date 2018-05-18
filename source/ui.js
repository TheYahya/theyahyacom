'use strict';
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Website',
		url: 'https:/theyahya.com'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/theyahya_'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/theyahya'
	},
	{
		label: 'Blog',
		url: 'https://theyahya.com/blog'
	},
	{
		label: 'About',
		url: 'https://theyahya.com/blog/about'
	},
	// TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>I’m a web developer, mostly work with #Python, #JS and #PHP.</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
