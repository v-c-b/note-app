// contains test instructions
var test_note = new note('JS rocks');
function testDefaultText() { return arguments.callee.name + ': ' + assert.isTrue(test_note.returnText() === 'JS rocks') }


var test_note_array =  new noteList()
test_note_array.createNote("Favorite drink: Beer")
function testNewNoteOnList() { return arguments.callee.name + ': ' + assert.isTrue(test_note_array.returnList().pop().returnText() === 'Favorite drink: Beer') }

var test_note_array2 =  new noteList()
test_note_array2.createNote("12345678901234567890++")
function testNoteMaxLength() { return arguments.callee.name + ': ' + assert.isTrue(test_note_array2.returnList().pop().returnText() === '12345678901234567890') }
