const fs = require('fs')
var file = fs.readFileSync(process.argv[2])
const str = file.toString()
splitstr = str.split('\n')
console.log(splitstr.length-1)