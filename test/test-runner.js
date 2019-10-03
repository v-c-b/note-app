// contains test instructions
var test_note = new note('JS rocks');
function testDefaultText() { return arguments.callee.name + ': ' + assert.isTrue(test_note.returnText() === 'JS rocks') }


var test_note_array =  new noteList()
test_note_array.createNote("Favorite drink: Beer")
function testNewNoteOnList() { return arguments.callee.name + ': ' + assert.isTrue(test_note_array.returnList().pop().returnText() === 'Favorite drink: Beer') }

var test_note_array2 =  new noteList()
test_note_array2.createNote("12345678901234567890++")
function testNoteMaxLength() { return arguments.callee.name + ': ' + assert.isTrue(test_note_array2.returnList().pop().returnText() === '12345678901234567890') }

var test_note_array3 =  new noteList()
test_note_array3.createNote("Favorite drink: Beer")
test_note_array3.createNote("Favorite drink: Wine")
function testNewNoteID() { return arguments.callee.name + ': ' + assert.isTrue(test_note_array3.returnList().pop().returnID() === 1) }

var newNoteList =  new noteList()
newNoteList.createNote("123")
newNoteList.createNote("1234")
function testReturnRow() { return arguments.callee.name + ': ' + assert.isTrue( createNoteRow(1) === '<tr><td><a href=#notes/1>1234<a/></td></tr>') }
