import { Maybe } from '../../generated/sdk';

type Maybe<T> = T | null
export interface User {
    id: string
    email: Maybe<string>
    phone: string
    name: string
    type: UserType,
    point: Maybe<UserPoint>
}



export interface Property {
    id: string
    title: string
    city: string
    state: string
    costValue: number
    owner: Pick<User, 'id' | 'name'>
    images: string[]
    description: string
}



export interface Location {
    city: string
    state: string
}

type UserType = "Agency" | "Individual"

export interface Cost {
    value: number
}
export interface CostInput {
    value: number
}


export interface RegisterResult {
    token: string | null
    message: string
}
export interface LoginResult {
    token: string | null
    message: string
}

export interface UserPoint {
    totalProfit: number
    totalPoints: number
    propertyPoints: PropertyPoint[]
}
export interface PropertyPoint {
    propertyId: string
    propertyTitle: string
    points: number
    profit: number
}