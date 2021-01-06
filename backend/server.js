const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const userRouter = require('./routes/user')
const exerciseRouter=require('./routes/exercise')

app.use(cors());
app.use(express.json())
app.use('/users', userRouter)
app.use('/exercises',exerciseRouter)

// connect DB
mongoose.connect(process.env.DB_LINK + process.env.DB_NAME, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(() => {
        console.log('MongoDB database is connected........');
    })
    .catch((error) => {
        console.log('Database is not connected because:' + error.message)
    });


app.listen(PORT, () => {
    console.log(' The Server is running on localhost:' + PORT)
})