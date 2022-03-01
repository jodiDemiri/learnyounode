const users = [
    {name: "Kaddy"},
    {name: "Mark"},
    {name: "Prince"},
    {name: "Kally"}
]
// Create and write to file
    fs.writeFile(
    path.join( dirname, '/test', 'hello.txt'),
    "Hello world!',
    err => {
    if (err) throw err;
    console.log('File written to...");
    I File append
    fs. appendFile(
    path. join(_ dirname, '/test', 'hello.txt'),
    " I love Node.js',
    err => f
    if (err) throw err;
    console.log( 'File written to...");
    // Read file
    /1 fs.readFile(path. join( dirname, '/test', 'hello.txt'), 'utf8', (err, data)
    
    if (err) throw err;
    console.log(data);
    ):