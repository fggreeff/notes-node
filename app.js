const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')
var titleOption = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}
var bodyOption = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
}
var argv = yargs
  .command('add', 'Add a note', { title: titleOption, body: bodyOption })
  .command('list', 'List notes')
  .command('read', 'Read a note', { title: titleOption })
  .command('remove', 'Remove a note', { title: titleOption })
  .help().argv
var command = argv._[0]

if (command === 'add') {
  var addedNote = notes.addNote(argv.title, argv.body)
  var message = addedNote
    ? `Note added: ${notes.logNote(addedNote)} `
    : `No stress! You already have that note`
  console.log(message)
} else if (command === 'list') {
  var allNotes = notes.getAll()
  console.log(`Printing ${allNotes.length} note(s)`)
  console.log(`Note retrieved:`)
  allNotes.forEach(n => console.log(`${notes.logNote(n)}`))
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
