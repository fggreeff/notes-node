console.log('starting app...')

const fs = require('fs')
const os = require('os')
const notes = require('./notes.js')

var user = os.userInfo()

var res = notes.addNote(`${user.username} lovely note`)
console.log(res)

/* -- my notes -- */
// callback
/*fs.appendFile('greetings.txt', 'hallow world', function (err) {
    if (err) {
        console.log('error');        
    }
} )
*/

//async
// fs.appendFileSync('greetings.txt', `hallo ${user.username}!, you are ${notes.age}`);
// notes.addNote('poet');
