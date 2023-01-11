import City from "./../models/City.js"
import State from "./../models/State.js"

export const createCity = async (input) => {
  const body = input
  const { name } = body

  const verifyCity = await City.findOne({name})

  if (verifyCity) throw new Error("Ciudad ya existe")

  try {
    const city = new City(body)
    city.save()
    return city
  } catch (error) {
    console.log(error.message)
  }
}

export const getCities = async (state) => {
  const verifyState = await State.findOne({ name: state })
  if(!verifyState) throw new Error('Estado no encotrado')
  try {
    const cities = await City.find({ idState: verifyState._id })
    return cities
  } catch (error) {
    console.log(error.message)
  }
}
