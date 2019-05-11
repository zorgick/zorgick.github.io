const express = require("express")
const PATH = require('path')

const app = express()

const port = process.env.PORT || 3000

app.use('/answers', express.static(PATH.join(__dirname, 'answers')))
app.use('/public', express.static(PATH.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(PATH.join(__dirname, 'index.html'))
})

app.listen(port, () => {
  console.log("Server is running on " + port)
})