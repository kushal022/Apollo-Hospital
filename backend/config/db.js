const mongoose = require('mongoose');

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB is Connected and Running on ${mongoose.connection.host}`)
        
    } catch (error) {
        console.log(`MongoDB is not Connected Error: ${error}`)
    }
}

module.exports = connectDb;