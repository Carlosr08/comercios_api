import Direction from "./../models/Direction"


export const createDirection = async (input) => {
  const body = input
  
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

