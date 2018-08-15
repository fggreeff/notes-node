console.log('starting app.js...')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

var argv = yargs.argv
var command = argv._[0]

if (command === 'add') {
  notes.addNote(argv.title, argv.body)
} else if (command === 'list') notes.getAll()
else if (command === 'read') notes.getNote(argv.title)
else if (command === 'remove') notes.removeNote(argv.title)
else console.log('Command not recognised')

/*var res = notes.addNote(`lovely note`)
console.log(_.isString(res))

var filteredArray = _.uniq(['this', 'more', 'that', 'and', 'this', 1, 1])
console.log(filteredArray)
*/
