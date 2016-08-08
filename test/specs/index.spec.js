/* eslint-env mocha */

var sinon = require('sinon')
var childProcess = require('child_process')

describe('npm-sh', function () {
  var sandbox = sinon.sandbox.create()
  beforeEach(function () {
    sandbox.stub(childProcess, 'spawn')
  })

  afterEach(function () {
    sandbox.restore()
  })

  it('should spawn a child process', function () {
    require('../../index')
    sinon.assert.calledOnce(childProcess.spawn)
  })
})
