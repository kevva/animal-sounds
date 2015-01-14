'use strict';

var sounds = require('./sounds.json');
var unique = require('unique-random')(0, sounds.length - 1);

module.exports = function () {
	return sounds[unique()];
};

module.exports.sounds = sounds;
