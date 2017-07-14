const express = require('express')
const app = express()

app.get('/', function (req, res) {
  
})

var PythonShell = require('python-shell');
var pyshell = new PythonShell('face_detect.py');


pyshell.on('message', function (message) {
    console.log(message);
});


pyshell.end(function (err) {
  if (err) throw err;
  console.log('Done!!');
});

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})

