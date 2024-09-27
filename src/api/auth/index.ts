// src/features/userApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface User {
    id?: number;
    username: string;
    password: string;
}

const BASE_URL = 'http://localhost:5000/users';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getUserByUsername: builder.query<User | null, string>({
            query: (username) => `?username=${username}`,
            transformResponse: (response: User[]) => response[0] || null,
        }),
        addUser: builder.mutation<User, Omit<User, 'id'>>({
            query: (newUser) => ({
                url: '',
                method: 'POST',
                body: newUser,
            }),
        }),
    }),
});

export const { useGetUserByUsernameQuery, useAddUserMutation } = userApi;