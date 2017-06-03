const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const pathMatch = require('path-match')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const route = pathMatch()
const match = route('/:name/:insult?')

app.prepare()
.then(() => {
  createServer((req, res) => {
    const { pathname, query } = parse(req.url, true)
    const params = match(pathname)
    if (params === false || params.name === '_next') {
      handle(req, res)
      return
    }

    app.render(req, res, '/form', Object.assign({}, params, query))
  })
  .listen(12578, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:12578')
  })
})
