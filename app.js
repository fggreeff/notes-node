console.log('starting app.js...')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

var argv = yargs.argv
var command = argv._[0]

if (command === 'add') {
  var addedNote = notes.addNote(argv.title, argv.body)
  var message = addedNote
    ? `Note added: ${notes.logNote(addedNote)} `
    : `No stress! You already have that note`
  console.log(message)
} else if (command === 'list') {
  var allNotes = notes.getAll()
  console.log(`Your notes: ${allNotes}`)
} else if (command === 'read') {
  var retrievedNote = notes.getNote(argv.title)
  var message = retrievedNote
    ? `Note retrieved: ${notes.logNote(retrievedNote)}`
    : `Note not found!`
  console.log(message)
} else if (command === 'remove') {
  var removedNote = notes.removeNote(argv.title)
  var message = removedNote
    ? `Note removed: -- \n Title: ${argv.title}`
    : `No stress! You don't have that note`
  console.log(message)
} else console.log('Command not recognised')

