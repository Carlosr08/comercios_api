import Municipality from "./../models/Municipality.js"
import State from "./../models/State.js"

export const createMunicipality = async (input) => {
  const body = input

  const { name } = body

  const verifyMunicipality = await Municipality.findOne({
    name,
  })

  if (verifyMunicipality) throw new Error("Municipio ya existe")

  try {
    const municipality = new Municipality(body)
    municipality.save()
    return municipality
  } catch (error) {
    console.log(error.message)
  }
}

export const getMunicipalities = async (state) => {
  const verifyState = await State.findOne({ name: state })
  if(!verifyState) throw new Error('Estado no encotrado')
  try {
    const municipalities = await Municipality.find({ idState: verifyState._id }).sort({ name })
    return municipalities
  } catch (error) {
    console.log(error.message)
  }
}
