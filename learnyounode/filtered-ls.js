const fs = require('fs')
var path = require('path')

var file = fs.readdir(process.argv[2], function cback(err, file)
    {
        file.forEach(function (file)
        {
            if (path.extname(file) === '.' + process.argv[3])
            console.log(file)      
       
         });
    }
)