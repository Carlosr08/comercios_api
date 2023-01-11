import mongoose from 'mongoose'
const { Schema } = mongoose

const DirectionSchema = new Schema({
  idMunicipality: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "Municipality"
  },
  idState: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "State"
  },
  idCity: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "City"
  },
  idParish: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "Parish"
  },
  street: {
    type: String,
    require: true,
  },
  sector: {
    type: String,
    require: true,
  },
  local: {
    type: String,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
})
export default mongoose.model("Direction", DirectionSchema)