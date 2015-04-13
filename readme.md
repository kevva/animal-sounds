# animal-sounds [![Build Status](https://travis-ci.org/kevva/animal-sounds.svg?branch=master)](https://travis-ci.org/kevva/animal-sounds)

> Get animal sounds


## Install

```
$ npm install --save animal-sounds
```


## Usage

```js
var animalSounds = require('animal-sounds');

animalSounds();
//=> bawl

animalSounds();
//=> peep

animalSounds.sounds;
//=> ['arf', 'baa', ...]
```


## CLI

```
$ npm install --global animal-sounds
```

```sh
$ animal-sounds --help

  Example
    $ animal-sounds
    hee-haw
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
