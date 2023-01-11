import mongoose from 'mongoose'
const { Schema } = mongoose

const ContactSchema = new Schema({
  nroContact: {
    type: String,
    unique: true,
    require: true
  },
  facebook: {
    type: String,
    unique: true
  },
  twitter: {
    type: String,
    unique: true
  },
  instagram: {
    type: String,
    unique: true
  },
  telegram: {
    type: String,
    unique: true
  },
  whatsapp: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  sitioWeb: {
    type: String,
    unique: true
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
})

export default mongoose.model("Contact", ContactSchema)
