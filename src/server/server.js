import express from 'express'
import path from 'path'
import apiRouter from './routes/api'
import session from 'express-session'
import bodyParser from 'body-parser'
import cors from 'cors'
import expressSanitizer from 'express-sanitizer'

const app = express()
const port =  process.env.PORT || 4000
const isProduction = process.env.NODE_ENV === 'production'
const root = './dist'

const sessionConfig = {
  secret: '8e96a83e-0c49-4ab4-9dc9-35915c605717',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60000
  }
}

app.use(session(sessionConfig))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(expressSanitizer())

app.use('/api', apiRouter)

app.use(express.static(root))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(root + '/index.html'))
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
