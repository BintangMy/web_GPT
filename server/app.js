if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
  }
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const routes = require("./routes/index")


app
.use(cors())
.use(express.json())
.use(express.urlencoded({extended:true}))
.use('/', routes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})