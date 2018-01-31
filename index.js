require('babelify-es6-polyfill')

const bases = require('./js/base')

const base = new bases()


base.cancel()
base.load_documento()