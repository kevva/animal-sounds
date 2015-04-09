'use strict';

var test = require('ava');
var animalSounds = require('./');

test('returns a random animal sound', function (t) {
	t.assert(animalSounds().length > 0, animalSounds().length);
	t.end();
});

test('returns all the sounds', function (t) {
	t.assert(Array.isArray(animalSounds.sounds), Array.isArray(animalSounds.sounds));
	t.assert(animalSounds.sounds[3].length > 0, animalSounds.sounds[3].length);
	t.end();
});
