const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
  console.info('Request received')
  let data = ''
  req.on('data', (chunk) => {
    data += chunk.toString()
  })
  req.on('end', () => {
    fs.writeFileSync('/efc/data/efcache', data)
    const writenData = fs.readFileSync('/efc/data/efcache')
    res.setHeader('Content-Type', 'application/json')
    res.writeHead(200)
    res.end(JSON.stringify({
      info: 'Request received',
      role: 'Writer',
      data: `Data put in efcache, ${writenData}`
    }))
  })
})
server.listen(3000) 