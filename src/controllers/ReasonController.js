import Reason from "./../models/Reason.js"

export const createReason = async (input) => {
  const body = input
  const { name } = body

  console.log(input)

  const verifyReason = await Reason.findOne({name})

  if (verifyReason) throw new Error("Razón o categoria ya existe")

  try {
    const reason = new Reason(body);
    reason.save();
    return reason;
  } catch (error) {
    console.log(error.message);
  }
}

export const getReasons = async () =>{
    try{
      const reasons = await Reason.find()
      return reasons
    }catch(error){
      console.log(error.message)
    }
} 