console.log('starting app.js...')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

var argv = yargs.argv
var command = argv._[0]

if (command === 'add') {
  var addedNote = notes.addNote(argv.title, argv.body)
  if (addedNote)
    var message = addedNote
      ? `Note added: -- \n Title: ${addedNote.title} \n Body: ${addedNote.body}`
      : `No stress! You already have that note`
  console.log(message)
} else if (command === 'list') notes.getAll()
else if (command === 'read') notes.getNote(argv.title)
else if (command === 'remove') {
  var removedNote = notes.removeNote(argv.title)
  var message = removedNote
    ? `Note removed: -- \n Title: ${argv.title}`
    : `No stress! You don't have that note`
  console.log(message)
} else console.log('Command not recognised')
/*var res = notes.addNote(`lovely note`)
console.log(_.isString(res))

var filteredArray = _.uniq(['this', 'more', 'that', 'and', 'this', 1, 1])
console.log(filteredArray)
*/
