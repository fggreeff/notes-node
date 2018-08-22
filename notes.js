console.log('starting notes.js...')
const fs = require('fs')
const _ = require('lodash')

function fetchNotes() {
  try {
    var notesString = fs.readFileSync('./note-data.json')
    return JSON.parse(notesString)
  } catch (error) {
    return []
  }
}

var saveNotes = notes => {
  fs.writeFileSync('./note-data.json', JSON.stringify(notes))
}

var addNote = (title, body) => {
  var notes = fetchNotes()
  var note = {
    title,
    body
  }

  var duplicateNotes = notes.filter(note => note.title === title)

  if (duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}

var getAll = () => {
  var notesString = fs.readFileSync('./note-data.json')
  var notesObj = JSON.parse(notes)
  console.log(`Getting all notes... ${notesObj}`)
}

var getNote = title => {
  console.log(`Get note ${title}`)
}

var removeNote = title => {
  var notes = fetchNotes()
  var filteredNotes = notes.filter(note => note.title !== title)
  if (filteredNotes.length >= 0) saveNotes(filteredNotes)
  return notes.length !== filteredNotes.length
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
