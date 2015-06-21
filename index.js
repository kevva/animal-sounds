'use strict';
var sounds = require('./sounds.json');

module.exports = function () {
	var unique = require('unique-random')(0, sounds.length - 1);
	return sounds[unique()];
};

module.exports.sounds = sounds;
