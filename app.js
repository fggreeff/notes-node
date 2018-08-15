console.log('starting app.js...')

const fs = require('fs')
const _ = require('lodash')

const notes = require('./notes.js')

var command = process.argv[2]
console.log(command)

if (command === 'add') console.log('Adding new note')
else if (command === 'list') console.log('Listing all notes')
else if (command === 'read') console.log('Reading note')
else if (command === 'remove') console.log('Removing note')
else console.log('Command not recognised')

/*var res = notes.addNote(`lovely note`)
console.log(_.isString(res))

var filteredArray = _.uniq(['this', 'more', 'that', 'and', 'this', 1, 1])
console.log(filteredArray)
*/
