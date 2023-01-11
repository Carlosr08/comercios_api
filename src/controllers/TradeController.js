import Trade from "./../models/Trade.js"
import User from "./../models/User.js"

export const createTrade = async (input) => {
  const body = input;

  const { rif } = body;

  const verifyTrade = await Trade.findOne({
    rif,
  });

  if (verifyTrade) throw new Error("Comercio ya registrado")

  try {
    const trade = new Trade(body)
    trade.save();
    return trade;
  } catch (error) {
    console.log(error.message)
  }
};

export const getTrades = async (username) => {
  try {
    const user = await User.findOne({username})
    const trades = await Trade.find({ idUser: user._id })
    return trades
  } catch (error) {
    console.log(error.message)
  }
}