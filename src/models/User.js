import mongoose from 'mongoose'
const { Schema } = mongoose

const UserSchema = new Schema({
  name:{
    type: String,
    require: true
  },
  username: {
    type: String,
    require: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    require:true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
    trim: true
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
})

export default mongoose.model("User", UserSchema)
