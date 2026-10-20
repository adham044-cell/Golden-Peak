import { cp, mkdir, rm } from 'node:fs/promises'

await rm('dist', { recursive: true, force: true })
await mkdir('dist/src', { recursive: true })
await cp('index.html', 'dist/index.html')
await cp('favicon.svg', 'dist/favicon.svg')
await cp('src/main.js', 'dist/src/main.js')
await cp('src/style.css', 'dist/src/style.css')
console.log('Static production build written to dist/')
