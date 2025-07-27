const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/healthz',(req,res)=>res.send('OK'))


const PORT = process.env.PORT || 5000
console.log(process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log("Mongo Error", err));