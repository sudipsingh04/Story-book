const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useFindAndModify: false
        })

        console.log(`MongoDB Connected`);
    } catch (err) {
        console.log(err);
        process.exit(1)
    }
}

module.exports = connectDB