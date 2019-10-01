// contains test instructions
var test_note = new note('JS rocks');
function testDefaultText() { return arguments.callee.name + ': ' + assert.isTrue(test_note.return_text() === 'JS rocks') }
