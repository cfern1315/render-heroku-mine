const { exec } = require('child_process');

const http = require("http").createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Should be running.');
});

exec('lscpu', (err, stdout, stderr) => {
  if (err) {
    console.error(err)
  } else {
   console.log(`stdout: ${stdout}`);
   console.log(`stderr: ${stderr}`);
  }
});

http.listen(3000)
