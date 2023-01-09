import mongoose from 'mongoose'
const { Schema } = mongoose

const MunicipalitySchema = new Schema({
	idState: {
		type: mongoose.Schema.Types.ObjectId,
		require: true,
		ref: "State"
	},
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

export default mongoose.model("Municipality", MunicipalitySchema)
