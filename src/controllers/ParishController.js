import Parish from "./../models/Parish.js"
import Municipality from "./../models/Municipality.js"

export const createParish = async (input) => {
  const body = input

  const { name } = body

  const verifyParish = await Parish.findOne({
    name,
  })

  if (verifyParish) throw new Error("Municipio ya existe")

  try {
    const parish = new Parish(body)
    parish.save()
    return parish
  } catch (error) {
    console.log(error.message)
  }
}

export const getParishes = async (municipality) => {
  const verifyMunicipality = await Municipality.findOne({ name: municipality })
  if(!verifyMunicipality) throw new Error('Municipio no encotrado')
  try {
    const parishes = await Parish.find({ idMunicipality: verifyMunicipality._id }).sort({ name })
    return parishes
  } catch (error) {
    console.log(error.message)
  }
}
