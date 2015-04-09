'use strict';

var unique = require('unique-random')(0, sounds.length - 1);
var sounds = require('./sounds.json');

module.exports = function () {
	return sounds[unique()];
};

module.exports.sounds = sounds;
