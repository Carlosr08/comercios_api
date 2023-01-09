import State from "./../models/State.js";

export const createState = async (input) => {
  const body = input;

  const { name } = body;

  const verifyState = await State.findOne({
    name,
  });

  if (verifyState) throw new Error("Estado ya existe");

  try {
    const state = new State(body);
    state.save();
    return state;
  } catch (error) {
    console.log(error.message);
  }
};

export const getStates = async (name) =>{
  try{
    if(name){
      const state = await State.find({name : name})
      return state
    }else{      
      const states = await State.find()
      return states
    }
  }catch(error){
    console.log(error.message)
  }
}