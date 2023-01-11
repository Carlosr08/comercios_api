import Trade from "../models/Trade.js"
import Contact from "./../models/Contact.js"

export const createContact = async (input) => {
  const body = input
  const { nroContact } = body

  const verifyContact = await Contact.findOne({nroContact})

  if (verifyContact) throw new Error("Contacto ya existe")

  try {
    const contact = new Contact(body)
    contact.save()
    return contact
  } catch (error) {
    console.log(error.message)
  }
}

export const getContact = async (trade) => {
  const verifyTrade = await Trade.findOne({ rif: trade })
  if(!verifyTrade) throw new Error('Comercio no encotrado')
  try {
    const contact = await Contact.findOne({ _id: verifyTrade.idContact })
    return contact
  } catch (error) {
    console.log(error.message)
  }
}
