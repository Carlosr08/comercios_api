import Direction from "./../models/Direction.js"


export const createDirection = async (input) => {
  const body = input
  const { sector } = body

  console.log(input)

  const verifyDirection = await Direction.findOne({sector})

  if (verifyDirection) throw new Error("Dirección ya existe")

  try {
    const direction = new Direction(body);
    direction.save();
    return direction;
  } catch (error) {
    console.log(error.message);
  }
}

export const getDirections = async () =>{
    try{
      const directions = await Direction.find()
      return directions
    }catch(error){
      console.log(error.message)
    }
} 