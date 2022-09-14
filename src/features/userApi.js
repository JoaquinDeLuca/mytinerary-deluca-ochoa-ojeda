import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import api from '../api'


const userApi = createApi ({
    reducerPath: "userApi",

    baseQuery: fetchBaseQuery({
        baseUrl: api
    }),

    endpoints: (builder) => ({
        postUser: builder.mutation({
            query: (dataNewUser) => ({
                url: '/auth/signup',
                method: 'POST',
                body: dataNewUser,
            }),
        }),
        postUserSingIn: builder.mutation({
            query: (user) => ({
                url: '/auth/signin',
                method: 'POST',
                body: user,
            }),
        }),
        postUserSingOut: builder.mutation({
            query: (mail) => ({
                url: `/auth/signout/${mail}`,
                method: 'PUT'
            }),
        })
    })
})

export default userApi
export const { usePostUserMutation, usePostUserSingInMutation, usePostUserSingOutMutation } = userApi