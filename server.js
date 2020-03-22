const express = require('express')
const app = express()
const path = require('path')

// app.get('/', (req, res) => {
//   // res.send('<h1>Hello there!</h1>')
//   res.sendFile(path.resolve(__dirname, 'public/index.html'))
// })

const PORT = process.env.PORT || 8080

app.use('/', express.static('public'))

app.get('*', (req, res) => {
  res.status(400).json({ message: 'page does not exist' })
})

app.listen(PORT, () => {
  console.log('listening on port 8080')
})
