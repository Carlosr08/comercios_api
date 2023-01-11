import Plan from "./../models/Plan.js";

export const createPlan = async (input) => {
  const body = input;

  const { name } = body;

  const verifyPlan = await Plan.findOne({
    name,
  });

  if (verifyPlan) throw new Error("Plan ya existe");

  try {
    const plan = new Plan(body);
    plan.save();
    return plan;
  } catch (error) {
    console.log(error.message);
  }
};

export const getPlans = async () =>{
  try{
    const plans = await Plan.find()
    return plans
  }catch(error){
    console.log(error.message)
  }
}