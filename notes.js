console.log('starting notes.js...')
const fs = require('fs')

var addNote = (title, body) => {
  var notes = []
  var note = {
    title,
    body
  }
  try {
    var notesString = fs.readFileSync('./note-data.json')
    notes = JSON.parse(notesString)
  } catch (error) {}

  notes.push(note)
  fs.writeFileSync('./note-data.json', JSON.stringify(notes))
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
  console.log(`Removing note ${title}`)
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
