const http = require('http')
const fs = require ('fs')
const server = http.createServer((req, res) => {
  console.info('Request received')
  let data = 'empty'
  try {
    data = fs.readFileSync('/efc/data/efcache').toString()
  } catch (error) {
    data = 'file not found'
  }
  res.setHeader('Content-Type', 'application/json')
  res.writeHead(200)
  res.end(JSON.stringify({
    info: 'Request received',
    role: 'Reader',
    data: (data) ? data : 'no data'
  }))
})
server.listen(3000) 