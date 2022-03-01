const fs = require('fs')

    var file = fs.readFile(process.argv[2], function operation(err, file)
    {
        const str = file.toString()
        splitstr = str.split('\n')
        console.log(splitstr.length-1)
    })  
