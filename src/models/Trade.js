import mongoose from 'mongoose'
const { Schema } = mongoose

const TradeSchema = new Schema({
  idUser: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "User"
  },
  idReason:{
    type: Schema.Types.ObjectId,
    require: true,
    ref: "Reason"
  },
  idDirection:{
    type: Schema.Types.ObjectId,
    require: true,
    ref: "Direction"
  },
  idContact: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "Contact"
  },
  name:{
    type: String,
    require: true
  },
  rif:{
    type: String,
    require: true,
    unique: true
  },
  description:{
    type: String
  },
  gps:{
    type: String
  },
  stateRegister:{
    type: String,
    require: true,
    default: "0"
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
})

export default mongoose.model("Trade", TradeSchema)