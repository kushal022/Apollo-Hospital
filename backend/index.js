const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config();
const connectDb = require('./config/db');
connectDb()

PORT = process.env.PORT || 3700;
app.get('/',(req,res)=>{
    res.json("hello from server")
})

const docRoutes = require('./routes/docRoutes')
app.use('/api/v1/doc',docRoutes) 

app.listen(PORT, ()=>{
    console.log(`Server Listening at ${PORT}`)
})
