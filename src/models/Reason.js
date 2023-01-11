import mongoose from 'mongoose'
const { Schema } = mongoose

const ReasonSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
})

export default mongoose.model("Reason", ReasonSchema)