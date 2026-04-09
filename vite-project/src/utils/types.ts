// types for auth

export type RegisterReq = {
    name: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    birthDate: string;
}

export type RegResponce = {
    ok: true
    token: string
} | {
    ok: false
    error: string
}

export type LoginReq = {
    email: string;
    password: string;
}

export type LoginResponce = {
    ok: true
    token: string
} | {
    ok: false
    error: string
}

// types for catalog

export type Product = {
    id: number;
    name: string;
    price: number;
    image?: string;
    category: string;
    description: string;
}