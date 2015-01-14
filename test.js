'use strict';

var animalSounds = require('./');
var test = require('ava');

test('returns a random animal sound', function (t) {
	t.assert(animalSounds().length > 0);
	t.end();
});

test('returns all the sounds', function (t) {
	t.assert(Array.isArray(animalSounds.sounds));
	t.assert(animalSounds.sounds[3].length > 0);
	t.end();
});
