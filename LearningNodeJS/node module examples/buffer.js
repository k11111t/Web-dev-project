const buffer = new Buffer.from('Viet Hung', 'utf-8')

//writing into the buffer:
// overwrites the first 4 characters of the buffer
buffer.write('Test')
// buffer contains: 'Test Hung'

// returns a string representation
console.log(buffer.toString())
// prints each character's encoding value in decimal format
console.log(buffer.toJSON())
// buffer contains raw binary data - in hex format
console.log(buffer)