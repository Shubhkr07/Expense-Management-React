const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const colors = require('colors')
const dotenv = require('dotenv')
const connectDb = require('./config/connectDb')

dotenv.config();

connectDb();
app.use(morgan('dev'))
app.use(express.json())
 app.use(cors())
 
 app.use("/api/v1/users", require("./routes/userRoute"));

const PORT = 8080 || process.eventNames.PORT

app.listen(PORT,() => {
    console.log(`Server running on ${PORT}`)
});

// ETJ93fRgZyJtfZLk