console.log('starting app.js...')

const fs = require('fs')
const _ = require('lodash')

const notes = require('./notes.js')

var res = notes.addNote(`lovely note`)
console.log(_.isString(res))

var filteredArray = _.uniq(['this', 'more', 'that', 'and', 'this', 1, 1])
console.log(filteredArray)
