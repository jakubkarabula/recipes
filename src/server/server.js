import express from 'express'
import path from 'path'
import apiRouter from './routes/api'
import session from 'express-session'
import bodyParser from 'body-parser'

const app = express()
const port = 4000

const isProduction = process.env.NODE_ENV === 'production'
const root = isProduction ? '.' : './dist'

const sessionConfig = {
  secret: '8e96a83e-0c49-4ab4-9dc9-35915c605717',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60000
  }
}

if (isProduction) {
  app.set('trust proxy', 1)
  sessionConfig.cookie.secure = true
}

app.use(session(sessionConfig))

app.use('/api', apiRouter)

app.use(express.static(root))
app.use(bodyParser)
app.use(bodyParser.json()) //Make sure u have added this line
app.use(bodyParser.urlencoded({ extended: false }))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(root + '/index.html'))
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
