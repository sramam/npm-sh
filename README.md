
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [https://david-dm.org/sramam/npm-sh.svg]

# npm-sh
A shell that adds node_modules/.bin to path. 

Basically it spawns a new shell with node_modules/.bin in the path. 
This allows one to use installed binaries locally without having to type ./node_modules/.bin
The package is almost completely copied from similar implementation from a similar implementation in [ied](https://github.com/alexanderGugel/ied)

Currently, only tested on macosx. Issue reports/ pull-requests welcome!

