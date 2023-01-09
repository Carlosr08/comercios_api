import { createUser, login } from "../controllers/UserController.js"
import { createPlan, getPlans } from "../controllers/PlanController.js"
import { createState, getStates } from "../controllers/StateController.js"
import { createMunicipality, getMunicipalities } from "../controllers/MunicipalityController.js"
import { createParish, getParishes } from "../controllers/ParishController.js"

const resolvers = {
  Query: {
    // User
    getUser: () => {
      console.log("Obteniendo Usuario")
      return null
    },
    // Plans
    getPlans: () => getPlans(),

    // States
    getStates: (_, { name }) => getStates(name),

    // Municipalities
    getMunicipalities: (_, { state }) => getMunicipalities(state),

    // Parishes
    getParishes: (_,{ municipality }) => getParishes(municipality),
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
  }
}

export default resolvers