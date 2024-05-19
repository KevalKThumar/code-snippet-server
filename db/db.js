
const mongoose = require('mongoose')

require('dotenv').config()


const { DB_URL } = process.env


mongoose.set('strictQuery', true)


module.exports = connectDb = async () => {
  try {

    await mongoose
      .connect(DB_URL, {

        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log(`Mongoose connected to MongoDb database`))
  } catch (error) {
    throw error
  }
}
