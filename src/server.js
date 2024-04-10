const sirv = require('sirv');
const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer(sirv('public', {
  dev: false // Disable development mode
}));

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
