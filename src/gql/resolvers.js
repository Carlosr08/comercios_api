import { createUser, getUsers, login } from "../controllers/UserController.js"
import { createPlan, getPlans } from "../controllers/PlanController.js"
import { createState, getStates } from "../controllers/StateController.js"
import { createMunicipality, getMunicipalities } from "../controllers/MunicipalityController.js"
import { createParish, getParishes } from "../controllers/ParishController.js"
import { createCity, getCities } from "../controllers/CityController.js"
import { createTrade, getTrades } from "../controllers/TradeController.js"
import { createContact, getContact } from "../controllers/ContactController.js"

const resolvers = {
  Query: {
    // User
    getUsers: () => getUsers(),
    // Plans
    getPlans: () => getPlans(),

    // States
    getStates: (_, { name }) => getStates(name),

    // Municipalities
    getMunicipalities: (_, { state }) => getMunicipalities(state),

    // Parishes
    getParishes: (_, { municipality }) => getParishes(municipality),

    // Cities
    getCities: (_, { state }) => getCities(state),

    // Contacts
    getContact: (_,{ trade }) => getContact(trade),

    // Trades
    getTrades: (_, { username }) => getTrades(username)
  },

  Mutation: {
    login: (_, { input }) => login(input),

    // User
    createUser: (_, { input }) => createUser(input),

    // Plans
    createPlan: (_, { input }) => createPlan(input),

    // States
    createState: (_, { input }) => createState(input),

    // Municipalities
    createMunicipality: (_, { input }) => createMunicipality(input),

    // Parishes
    createParish: (_, { input }) => createParish(input),

    // Cities
    createCity: (_, { input }) => createCity(input),

    // Contact
    createContact: (_,{ input }) => createContact(input),

    // Trades
    createTrade: (_, { input }) => createTrade(input)
  }
}

export default resolvers