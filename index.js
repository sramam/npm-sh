var spawn = require('child_process').spawn
var fs = require('fs')
var path = require('path')
if (typeof Object.create !== 'function') {
  Object.create = (function () {
    var Temp = function () {}
    return function (prototype) {
      if (arguments.length > 1) {
        throw Error('Second argument not supported')
      }
      if (typeof prototype !== 'object') {
        throw TypeError('Argument must be an object')
      }
      Temp.prototype = prototype
      var result = new Temp()
      Temp.prototype = null
      return result
    }
  })()
}

var nodeModules = path.join(process.cwd(), 'node_modules/.bin')
var env = Object.create(process.env)
var opts = {
  env: env,
  stdio: 'inherit'
}
var isWin = /^win/.test(process.platform)
var shell = env.SHELL || (isWin ? env.comspec || 'cmd' : 'sh')

var shproc
try {
  fs.statSync(nodeModules)
    // prepend ./node_modules/.bin to path
  opts.env.PATH = [nodeModules, opts.env.PATH].join(path.delimiter)

    // spawn the shell
  shproc = spawn(shell, [], opts)
  shproc.on('close', function (code) {
    console.log('\n exiting npm shell')
    process.exit()
  })
  console.log('\nadded: ', fs.readdirSync(nodeModules).join(', '))
  console.log(shell) // we seemingly need this to show the first prompt TODO: figure how to eliminate
} catch (err) {
  console.log('\nMissing node_modules/.bin directory. Skipping spawning a shell')
}
