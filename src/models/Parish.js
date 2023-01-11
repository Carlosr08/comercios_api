import mongoose from 'mongoose'
const { Schema } = mongoose

const ParishSchema = new Schema({
	idMunicipality: {
		type: Schema.Types.ObjectId,
		require: true,
		ref: "Municipality"
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

export default mongoose.model("Parish", ParishSchema)
