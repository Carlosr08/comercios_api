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

  type City {
    id: ID
    idState: ID
    name: String
  }

  type Trade {
    id: ID
    idReason: ID
    idDirection: ID
    idContact: ID
    name: String
    rif: String
    description: String
    gps: String
    stateRegister: String
    createAt: String
  }

  type Direction {
    id: ID
    idMunicipality: ID
    idState: ID
    idCity: ID
    idParish: ID
    street: String
    sector: String
    local: String
    createAt: String
  }

  type Contact {
    id: ID
    nroContact: String
    facebook: String
    twitter: String
    instagram: String
    telegram: String
    whatsapp: String
    email: String
    sitioWeb: String
    createAt: String
  }

  type Reason {
    name: String
    createAt: String
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

  input CityInput{
    name: String!
    idState: ID!
  }

  input TradeInput{
    idUser: ID!
    idReason: ID!
    idDirection: ID!
    idContact: ID!
    name: String!
    rif: String!
    description: String!
    gps: String
    stateRegister: String
  }

  input ContactInput{
    nroContact: String!
    facebook: String
    twitter: String
    instagram: String
    telegram: String
    whatsapp: String
    email: String
    sitioWeb: String
  }

  input DirectionInput{
    idMunicipality: ID!
    idState: ID!
    idCity: ID!
    idParish: ID!
    street: String!
    sector: String!
    local: String
    createAt: String
  }

  input ReasonInput{
    name: String!
  }

  type Query {
    # User
    getUsers: [User]

    # Plans
    getPlans: [Plan]

    # State
    getStates(name: String): [State]

    # Municipality
    getMunicipalities(state: String!): [Municipality]

    # Parishes
    getParishes(municipality: String!): [Parish]

    # Cities
    getCities(state: String!): [City]

    # Contacts
    getContact(trade: String!): Contact

    # Trades
    getTrades(username: String!): [Trade]

    # Direction
    getDirection(trade: String!): [Direction]

    # Reasons
    getReasons: [Reason]
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

    # Cities
    createCity(input: CityInput): City

    # Contacts
    createContact(input: ContactInput): Contact

    # Trades
    createTrade(input: TradeInput!): Trade

    # Direction
    createDirection(input: DirectionInput!): Direction

    # Reasons
    createReason(input: ReasonInput!): Reason
  }
`
export default typeDefs