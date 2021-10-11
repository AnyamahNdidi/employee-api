const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('welcome to my page')
})


app.listen(process.env.PORT || 4000, () => {
  console.log('port is ready to be used')
})