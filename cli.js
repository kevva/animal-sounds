#!/usr/bin/env node
'use strict';
var meow = require('meow');
var animalSounds = require('./');

meow({
	help: [
		'Example',
		'  $ animal-sounds',
		'  hee-haw'
	]
});

console.log(animalSounds());
