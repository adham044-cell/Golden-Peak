import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { resolve, extname, sep } from 'node:path'

const root = resolve(process.argv[2] || '.')
const port = Number(process.env.PORT || 4173)
const host = process.env.HOST || '127.0.0.1'
const types = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.svg':'image/svg+xml' }
const server = createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname)
    let file = resolve(root, `.${pathname}`)
    if (!file.startsWith(root + sep) && file !== root) throw new Error('Invalid path')
    try { if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html') } catch { file = resolve(root, 'index.html') }
    const body = await readFile(file)
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'X-Content-Type-Options':'nosniff' })
    res.end(body)
  } catch { res.writeHead(404); res.end('Not found') }
})
server.listen(port, host, () => console.log(`Golden Peak ready at http://${host}:${port} (${root})`))
