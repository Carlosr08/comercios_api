import mongoose from 'mongoose'
const { Schema } = mongoose

const StateSchema = new Schema({
  name:{
    type: String,
    require: true,
    unique: true
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
})

export default mongoose.model("State", StateSchema)
