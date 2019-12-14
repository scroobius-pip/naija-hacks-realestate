// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateContact {
  count: Int!
}

type AggregateProperty {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Contact {
  id: ID!
  name: String!
  number: String!
  property: Property!
}

type ContactConnection {
  pageInfo: PageInfo!
  edges: [ContactEdge]!
  aggregate: AggregateContact!
}

input ContactCreateInput {
  id: ID
  name: String!
  number: String!
  property: PropertyCreateOneInput!
}

input ContactCreateManyInput {
  create: [ContactCreateInput!]
  connect: [ContactWhereUniqueInput!]
}

type ContactEdge {
  node: Contact!
  cursor: String!
}

enum ContactOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  number_ASC
  number_DESC
}

type ContactPreviousValues {
  id: ID!
  name: String!
  number: String!
}

input ContactScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  number: String
  number_not: String
  number_in: [String!]
  number_not_in: [String!]
  number_lt: String
  number_lte: String
  number_gt: String
  number_gte: String
  number_contains: String
  number_not_contains: String
  number_starts_with: String
  number_not_starts_with: String
  number_ends_with: String
  number_not_ends_with: String
  AND: [ContactScalarWhereInput!]
  OR: [ContactScalarWhereInput!]
  NOT: [ContactScalarWhereInput!]
}

type ContactSubscriptionPayload {
  mutation: MutationType!
  node: Contact
  updatedFields: [String!]
  previousValues: ContactPreviousValues
}

input ContactSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ContactWhereInput
  AND: [ContactSubscriptionWhereInput!]
  OR: [ContactSubscriptionWhereInput!]
  NOT: [ContactSubscriptionWhereInput!]
}

input ContactUpdateDataInput {
  name: String
  number: String
  property: PropertyUpdateOneRequiredInput
}

input ContactUpdateInput {
  name: String
  number: String
  property: PropertyUpdateOneRequiredInput
}

input ContactUpdateManyDataInput {
  name: String
  number: String
}

input ContactUpdateManyInput {
  create: [ContactCreateInput!]
  update: [ContactUpdateWithWhereUniqueNestedInput!]
  upsert: [ContactUpsertWithWhereUniqueNestedInput!]
  delete: [ContactWhereUniqueInput!]
  connect: [ContactWhereUniqueInput!]
  set: [ContactWhereUniqueInput!]
  disconnect: [ContactWhereUniqueInput!]
  deleteMany: [ContactScalarWhereInput!]
  updateMany: [ContactUpdateManyWithWhereNestedInput!]
}

input ContactUpdateManyMutationInput {
  name: String
  number: String
}

input ContactUpdateManyWithWhereNestedInput {
  where: ContactScalarWhereInput!
  data: ContactUpdateManyDataInput!
}

input ContactUpdateWithWhereUniqueNestedInput {
  where: ContactWhereUniqueInput!
  data: ContactUpdateDataInput!
}

input ContactUpsertWithWhereUniqueNestedInput {
  where: ContactWhereUniqueInput!
  update: ContactUpdateDataInput!
  create: ContactCreateInput!
}

input ContactWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  number: String
  number_not: String
  number_in: [String!]
  number_not_in: [String!]
  number_lt: String
  number_lte: String
  number_gt: String
  number_gte: String
  number_contains: String
  number_not_contains: String
  number_starts_with: String
  number_not_starts_with: String
  number_ends_with: String
  number_not_ends_with: String
  property: PropertyWhereInput
  AND: [ContactWhereInput!]
  OR: [ContactWhereInput!]
  NOT: [ContactWhereInput!]
}

input ContactWhereUniqueInput {
  id: ID
}

enum CostType {
  Rent
  Sale
}

scalar Long

type Mutation {
  createContact(data: ContactCreateInput!): Contact!
  updateContact(data: ContactUpdateInput!, where: ContactWhereUniqueInput!): Contact
  updateManyContacts(data: ContactUpdateManyMutationInput!, where: ContactWhereInput): BatchPayload!
  upsertContact(where: ContactWhereUniqueInput!, create: ContactCreateInput!, update: ContactUpdateInput!): Contact!
  deleteContact(where: ContactWhereUniqueInput!): Contact
  deleteManyContacts(where: ContactWhereInput): BatchPayload!
  createProperty(data: PropertyCreateInput!): Property!
  updateProperty(data: PropertyUpdateInput!, where: PropertyWhereUniqueInput!): Property
  updateManyProperties(data: PropertyUpdateManyMutationInput!, where: PropertyWhereInput): BatchPayload!
  upsertProperty(where: PropertyWhereUniqueInput!, create: PropertyCreateInput!, update: PropertyUpdateInput!): Property!
  deleteProperty(where: PropertyWhereUniqueInput!): Property
  deleteManyProperties(where: PropertyWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Property {
  id: ID!
  title: String!
  city: String!
  state: String!
  costValue: Int!
  costType: CostType!
  ownerId: ID!
  ownerName: String!
  images: [String!]!
  description: String!
}

type PropertyConnection {
  pageInfo: PageInfo!
  edges: [PropertyEdge]!
  aggregate: AggregateProperty!
}

input PropertyCreateimagesInput {
  set: [String!]
}

input PropertyCreateInput {
  id: ID
  title: String!
  city: String!
  state: String!
  costValue: Int!
  costType: CostType!
  ownerId: ID!
  ownerName: String!
  images: PropertyCreateimagesInput
  description: String!
}

input PropertyCreateManyInput {
  create: [PropertyCreateInput!]
  connect: [PropertyWhereUniqueInput!]
}

input PropertyCreateOneInput {
  create: PropertyCreateInput
  connect: PropertyWhereUniqueInput
}

type PropertyEdge {
  node: Property!
  cursor: String!
}

enum PropertyOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  city_ASC
  city_DESC
  state_ASC
  state_DESC
  costValue_ASC
  costValue_DESC
  costType_ASC
  costType_DESC
  ownerId_ASC
  ownerId_DESC
  ownerName_ASC
  ownerName_DESC
  description_ASC
  description_DESC
}

type PropertyPreviousValues {
  id: ID!
  title: String!
  city: String!
  state: String!
  costValue: Int!
  costType: CostType!
  ownerId: ID!
  ownerName: String!
  images: [String!]!
  description: String!
}

input PropertyScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  costValue: Int
  costValue_not: Int
  costValue_in: [Int!]
  costValue_not_in: [Int!]
  costValue_lt: Int
  costValue_lte: Int
  costValue_gt: Int
  costValue_gte: Int
  costType: CostType
  costType_not: CostType
  costType_in: [CostType!]
  costType_not_in: [CostType!]
  ownerId: ID
  ownerId_not: ID
  ownerId_in: [ID!]
  ownerId_not_in: [ID!]
  ownerId_lt: ID
  ownerId_lte: ID
  ownerId_gt: ID
  ownerId_gte: ID
  ownerId_contains: ID
  ownerId_not_contains: ID
  ownerId_starts_with: ID
  ownerId_not_starts_with: ID
  ownerId_ends_with: ID
  ownerId_not_ends_with: ID
  ownerName: String
  ownerName_not: String
  ownerName_in: [String!]
  ownerName_not_in: [String!]
  ownerName_lt: String
  ownerName_lte: String
  ownerName_gt: String
  ownerName_gte: String
  ownerName_contains: String
  ownerName_not_contains: String
  ownerName_starts_with: String
  ownerName_not_starts_with: String
  ownerName_ends_with: String
  ownerName_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [PropertyScalarWhereInput!]
  OR: [PropertyScalarWhereInput!]
  NOT: [PropertyScalarWhereInput!]
}

type PropertySubscriptionPayload {
  mutation: MutationType!
  node: Property
  updatedFields: [String!]
  previousValues: PropertyPreviousValues
}

input PropertySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PropertyWhereInput
  AND: [PropertySubscriptionWhereInput!]
  OR: [PropertySubscriptionWhereInput!]
  NOT: [PropertySubscriptionWhereInput!]
}

input PropertyUpdateDataInput {
  title: String
  city: String
  state: String
  costValue: Int
  costType: CostType
  ownerId: ID
  ownerName: String
  images: PropertyUpdateimagesInput
  description: String
}

input PropertyUpdateimagesInput {
  set: [String!]
}

input PropertyUpdateInput {
  title: String
  city: String
  state: String
  costValue: Int
  costType: CostType
  ownerId: ID
  ownerName: String
  images: PropertyUpdateimagesInput
  description: String
}

input PropertyUpdateManyDataInput {
  title: String
  city: String
  state: String
  costValue: Int
  costType: CostType
  ownerId: ID
  ownerName: String
  images: PropertyUpdateimagesInput
  description: String
}

input PropertyUpdateManyInput {
  create: [PropertyCreateInput!]
  update: [PropertyUpdateWithWhereUniqueNestedInput!]
  upsert: [PropertyUpsertWithWhereUniqueNestedInput!]
  delete: [PropertyWhereUniqueInput!]
  connect: [PropertyWhereUniqueInput!]
  set: [PropertyWhereUniqueInput!]
  disconnect: [PropertyWhereUniqueInput!]
  deleteMany: [PropertyScalarWhereInput!]
  updateMany: [PropertyUpdateManyWithWhereNestedInput!]
}

input PropertyUpdateManyMutationInput {
  title: String
  city: String
  state: String
  costValue: Int
  costType: CostType
  ownerId: ID
  ownerName: String
  images: PropertyUpdateimagesInput
  description: String
}

input PropertyUpdateManyWithWhereNestedInput {
  where: PropertyScalarWhereInput!
  data: PropertyUpdateManyDataInput!
}

input PropertyUpdateOneRequiredInput {
  create: PropertyCreateInput
  update: PropertyUpdateDataInput
  upsert: PropertyUpsertNestedInput
  connect: PropertyWhereUniqueInput
}

input PropertyUpdateWithWhereUniqueNestedInput {
  where: PropertyWhereUniqueInput!
  data: PropertyUpdateDataInput!
}

input PropertyUpsertNestedInput {
  update: PropertyUpdateDataInput!
  create: PropertyCreateInput!
}

input PropertyUpsertWithWhereUniqueNestedInput {
  where: PropertyWhereUniqueInput!
  update: PropertyUpdateDataInput!
  create: PropertyCreateInput!
}

input PropertyWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  costValue: Int
  costValue_not: Int
  costValue_in: [Int!]
  costValue_not_in: [Int!]
  costValue_lt: Int
  costValue_lte: Int
  costValue_gt: Int
  costValue_gte: Int
  costType: CostType
  costType_not: CostType
  costType_in: [CostType!]
  costType_not_in: [CostType!]
  ownerId: ID
  ownerId_not: ID
  ownerId_in: [ID!]
  ownerId_not_in: [ID!]
  ownerId_lt: ID
  ownerId_lte: ID
  ownerId_gt: ID
  ownerId_gte: ID
  ownerId_contains: ID
  ownerId_not_contains: ID
  ownerId_starts_with: ID
  ownerId_not_starts_with: ID
  ownerId_ends_with: ID
  ownerId_not_ends_with: ID
  ownerName: String
  ownerName_not: String
  ownerName_in: [String!]
  ownerName_not_in: [String!]
  ownerName_lt: String
  ownerName_lte: String
  ownerName_gt: String
  ownerName_gte: String
  ownerName_contains: String
  ownerName_not_contains: String
  ownerName_starts_with: String
  ownerName_not_starts_with: String
  ownerName_ends_with: String
  ownerName_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [PropertyWhereInput!]
  OR: [PropertyWhereInput!]
  NOT: [PropertyWhereInput!]
}

input PropertyWhereUniqueInput {
  id: ID
}

type Query {
  contact(where: ContactWhereUniqueInput!): Contact
  contacts(where: ContactWhereInput, orderBy: ContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Contact]!
  contactsConnection(where: ContactWhereInput, orderBy: ContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ContactConnection!
  property(where: PropertyWhereUniqueInput!): Property
  properties(where: PropertyWhereInput, orderBy: PropertyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Property]!
  propertiesConnection(where: PropertyWhereInput, orderBy: PropertyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PropertyConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  contact(where: ContactSubscriptionWhereInput): ContactSubscriptionPayload
  property(where: PropertySubscriptionWhereInput): PropertySubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  phone: String!
  name: String!
  password: String!
  properties(where: PropertyWhereInput, orderBy: PropertyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Property!]
  type: UserType!
  cac: String
  tin: String
  contacts(where: ContactWhereInput, orderBy: ContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Contact!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  phone: String!
  name: String!
  password: String!
  properties: PropertyCreateManyInput
  type: UserType!
  cac: String
  tin: String
  contacts: ContactCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  phone_ASC
  phone_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  type_ASC
  type_DESC
  cac_ASC
  cac_DESC
  tin_ASC
  tin_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  phone: String!
  name: String!
  password: String!
  type: UserType!
  cac: String
  tin: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

enum UserType {
  Agency
  Individual
}

input UserUpdateInput {
  email: String
  phone: String
  name: String
  password: String
  properties: PropertyUpdateManyInput
  type: UserType
  cac: String
  tin: String
  contacts: ContactUpdateManyInput
}

input UserUpdateManyMutationInput {
  email: String
  phone: String
  name: String
  password: String
  type: UserType
  cac: String
  tin: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  properties_every: PropertyWhereInput
  properties_some: PropertyWhereInput
  properties_none: PropertyWhereInput
  type: UserType
  type_not: UserType
  type_in: [UserType!]
  type_not_in: [UserType!]
  cac: String
  cac_not: String
  cac_in: [String!]
  cac_not_in: [String!]
  cac_lt: String
  cac_lte: String
  cac_gt: String
  cac_gte: String
  cac_contains: String
  cac_not_contains: String
  cac_starts_with: String
  cac_not_starts_with: String
  cac_ends_with: String
  cac_not_ends_with: String
  tin: String
  tin_not: String
  tin_in: [String!]
  tin_not_in: [String!]
  tin_lt: String
  tin_lte: String
  tin_gt: String
  tin_gte: String
  tin_contains: String
  tin_not_contains: String
  tin_starts_with: String
  tin_not_starts_with: String
  tin_ends_with: String
  tin_not_ends_with: String
  contacts_every: ContactWhereInput
  contacts_some: ContactWhereInput
  contacts_none: ContactWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  name: String
  cac: String
  tin: String
}
`