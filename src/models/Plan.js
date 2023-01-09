import mongoose from 'mongoose'
const { Schema } = mongoose

const PlanSchema = new Schema({
  name:{
    type: String,
    require: true,
    unique: true
  },
  price: {
    type: Number,
    require: true
  },
  description: {
    type: String
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
})

export default mongoose.model("Plan", PlanSchema)
