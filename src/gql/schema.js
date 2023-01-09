const typeDefs = `#graphql
  type User {
    id: ID
    name: String
    username: String
    email: String
    password: String
    createAt: String
  }

  type Token {
    token: String
  }

  type Plan {
    id: ID
    name: String
    price: String
    description: String
  }

  type State {
    id: ID
    name: String
  }

  type Municipality {
    id: ID
    idState: ID
    name: String
  }

  type Parish {
    id: ID
    idMunicipality: ID
    name: String
  }

  input UserInput {
    name: String!
    username: String!
    email: String!
    password: String!
  }

  input PlanInput {
    name: String!
    price: String!
    description: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input StateInput{
    name: String!
  }

  input MunicipalityInput{
    name: String!
    idState: ID!
  }

  input ParishInput{
    name: String!
    idMunicipality: ID!
  }


  type Query {
    # User
    getUser(id: ID, username: String): User

    # Plans
    getPlans: [Plan]

    # State
    getStates(name: String): [State]

    # Municipality
    getMunicipalities(state: String!): [Municipality]

    # Parishes
    getParishes(municipality: String): [Parish]
  }

  type Mutation {
    login(input: LoginInput): Token

    # User
    createUser(input: UserInput): User

    # Plans
    createPlan(input: PlanInput): Plan

    # States
    createState(input: StateInput): Plan

    # Municipalities
    createMunicipality(input: MunicipalityInput): Municipality

    # Parishes
    createParish(input: ParishInput): Parish
  }
`

export default typeDefs