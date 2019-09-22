const https = require('https');
const fs = require('fs');

const options = {
  pfx: fs.readFileSync('ryans.pfx'),
  passphrase: 'sample'
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);