const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const myRouter = require('./router/emroute')

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors())
dotenv.config()

mongoose.connect(process.env.mongoosedb,
  { useUnifiedTopology: true, useNewUrlParser: true }
).then(() => {
  console.log("connect sucessfully")
}).catch(err => console.log(err))



app.use("/employee", myRouter)
app.get('/', (req, res) => {
  res.send('welcome to my page')
})


app.listen(process.env.PORT || 4000, () => {
  console.log('port is ready to be used')
})