
const data = `type Query {
  me: User
  properties(type: CostType): [Property!]!
  property(id: ID!): Property
}

type Mutation {
  register(input: RegisterInput!): RegisterResult!
  login(input: LoginInput!): LoginResult!
  createProperty(input: CreatePropertyInput!): ID!
  deleteProperty(id: ID!): Boolean!
  contactAgent(input: ContactAgentInput!): Boolean!
}

type Property {
  id: String!
  title: String!
  city: String!
  state: String!
  costValue: Int!
  costType: CostType!
  ownerId: String!
  ownerName: String!
  images: [String!]!
  description: String!
}

enum CostType {
  Rent
  Sale
}

enum UserType {
  Agency
  Individual
}

type Location {
  city: String!
  state: String!
}

input LocationInput {
  city: String!
  state: String!
}

type Cost {
  value: Int!
  costType: CostType!
}

type User {
  id: ID!
  email: String
  phone: String!
  name: String!
  type: UserType!
  properties: [Property!]!
}

input ContactAgentInput {
  propertyId: String!
  name: String!
  number: String!
  referrerId: String!
}

input RegisterInput {
  email: String!
  password: String!
  name: String!
  phone: String!
  cac: String
  tin: String
  type: UserType!
}

type RegisterResult {
  token: String
  message: String!
}

type LoginResult {
  token: String
  message: String!
}

input LoginInput {
  email: String!
  password: String!
}

input CreatePropertyInput {
  title: String!
  location: LocationInput!
  costValue: Int!
  costType: CostType!
  images: [String!]!
  description: String!
}
`
export default data
