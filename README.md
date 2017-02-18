# generator-dmg [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Generator to scaffold a gambeoy project using rgbds

## Installation

First, install [Yeoman](http://yeoman.io) and generator-dmg using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-dmg
```

Then generate your new project:

```bash
yo dmg
```

### Install wine
You will need to install wine to run the emulator that executes the rom.
```bash
brew install wine
```

### Building and running the ROM-image
```bash
./run.sh
```


## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Andre Uschmann](andre-uschmann.de)


[npm-image]: https://badge.fury.io/js/generator-dmg.svg
[npm-url]: https://npmjs.org/package/generator-dmg
[travis-image]: https://travis-ci.org/uschmann/generator-dmg.svg?branch=master
[travis-url]: https://travis-ci.org/uschmann/generator-dmg
[daviddm-image]: https://david-dm.org/uschmann/generator-dmg.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/uschmann/generator-dmg
