#!/usr/bin/env node
'use strict';

var animalSounds = require('./');
var meow = require('meow');

meow({
	help: [
		'Example',
		'  $ animal-sounds',
		'  hee-haw'
	].join('\n')
});

console.log(animalSounds());
