
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![dependencies](https://david-dm.org/sramam/npm-sh.svg)](https://david-dm.org/sramam/npm-sh) ![license](https://img.shields.io/npm/l/npm-sh.svg)

# npm-sh
A shell that adds node_modules/.bin to path. 

Basically it spawns a new shell with node_modules/.bin in the path. 
This allows one to use installed binaries locally without having to type ./node_modules/.bin
The package is almost completely copied from similar implementation from a similar implementation in [ied](https://github.com/alexanderGugel/ied)

Currently, only tested on macosx. Issue reports/ pull-requests welcome!

## Installation
    npm install npm-sh

## Usage
    $ ./node_modules/.bin/npm-sh
    
    ---
    Starting npm shell
    added:  _mocha, mocha, standard
    type "exit" when done
    ---
    
    bash-4.3$

