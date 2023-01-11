import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from './../models/User.js'

const createToken = (user, SECRET_KEY, expiresIn) => {
  const { id, name, email, username } = user

  const payload = { id, name, email, username }

  return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

export const login = async (input) => {
  const { email, password } = input

  const userFound = await User.findOne({ email: email.toLowerCase() })
  if (!userFound) throw new Error('Error en el email o contraseña')

  const passwordVerify = await bcryptjs.compare(password, userFound.password)
  if (!passwordVerify) throw new Error('Error en el email o contraseña')

  const token = createToken(userFound, process.env.SECRET_KEY, "24h")

  return {
    token: token
  }
}

export const getUsers = async ()=>{
  try{
    const users = await User.find()
    return users
  }catch(error){
    console.log(error.message)
  }
}

export const createUser = async (input) => {
  const body = input
  body.email = body.email.toLowerCase()
  body.username = body.username.toLowerCase()

  const { email, username, password } = body

  const verifyEmail = await User.findOne({ email })
  if (verifyEmail) throw new Error('Email ya esta en uso')

  const verifyUsername = await User.findOne({ username })
  if (verifyUsername) throw new Error('Usuario ya esta en uso')

  const salt = await bcryptjs.genSaltSync(10)
  body.password = await bcryptjs.hash(password, salt)

  try {
    const user = new User(body)
    user.save()

    return user
  } catch (error) {
    console.log(error.message)
  }
}