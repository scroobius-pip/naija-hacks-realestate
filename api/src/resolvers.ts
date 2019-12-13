import { QueryResolvers, MutationResolvers } from '../generated/graphqlgen'
import { AuthenticationError } from 'apollo-server-core'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const Query: QueryResolvers.Type = {

    me: (_, __, ctx) => {
        if (!ctx.userId) {
            throw new AuthenticationError('Token Not Passed')
        }
        return ctx.prisma.user({ id: ctx.userId })


    },
    properties: (_, args, ctx) => {
        // return args.type
        return args.type ? ctx.prisma.properties({ where: { costType: args.type } }) : ctx.prisma.properties()
    }
}

const Mutation: MutationResolvers.Type = {
    createProperty: (_, { input }, ctx) => {
        if (!ctx.userId) {
            throw new AuthenticationError('Token Not Passed')
        }
        const { description, images, location: { city, state }, title, costType, costValue } = input
        return ctx.prisma.createProperty({
            costType,
            costValue,
            description,
            images: {
                set: images
            },
            city,
            state,
            title,
            owner: {
                connect: { id: ctx.userId }
            }
        })
    },
    deleteProperty: async (_, args, ctx) => {
        if (!ctx.userId) {
            throw new AuthenticationError('Token Not Passed')
        }

        try {
            await ctx.prisma.updateUser({
                where: { id: ctx.userId },
                data: {
                    properties: {
                        delete: { id: args.id }
                    }
                }
            })
            return true
        } catch (error) {
            return false
        }

    },
    login: async (_, { input: { email, password } }, ctx) => {
        const user = await ctx.prisma.user({ email })
        if (!user) {
            return {
                token: '',
                message: 'Email Not Found'
            }
        }

        return {
            token: bcrypt.compareSync(password, user.password) ? createToken(user.id) : '',
            message: ''
        }




    },
    register: async (_, { input }, ctx) => {

        if (await ctx.prisma.user({ email: input.email })) {
            return {
                token: '',
                message: 'User Exists'
            }
        }

        try {

            const userId = await ctx.prisma.createUser({
                email: input.email,
                name: input.name,
                password: await bcrypt.hash(input.password, 2),
                phone: input.phone,
                type: input.type
            }).id()

            return {
                token: createToken(userId),
                message: ''
            }
        } catch (error) {
            console.log(error)
            return {
                token: '',
                message: error.message
            }
        }

    }
}

export default {
    Query,
    Mutation
}
function createToken(userId: string) {
    return jwt.sign({
        userId,
    }, 'test', {
        expiresIn: '30d',
    });
}

