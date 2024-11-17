import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from "@/models/user";

const BASE_URL = 'http://localhost:5000/users';


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({

        getUserByUsername: builder.query<User | null, string>({
            query: (username) => `?username=${username}`,
            transformResponse: (response: User[]) => response[0] || null,
        }),

        isUserNameUnique: builder.query<boolean, string>({
            query: (username) => `?username=${username.trim()}`,
            transformResponse: (response: User[]) => response.length > 0,
        }),

        addUser: builder.mutation<User, Omit<User, 'id'> & { id: string }>({
            query: (newUser) => ({
                url: '',
                method: 'POST',
                body: newUser,
            }),
        }),

        updateUsername: builder.mutation<User, { id: string; newUsername: string }>({
            query: ({ id, newUsername }) => ({
                url: `/${id}`,
                method: 'PATCH',
                body: { username: newUsername },
            })
        }),

        deleteUsersApplication: builder.mutation<User, { id: string, newApplicationsArr: string[] }>({
            query: ({ id, newApplicationsArr }) => ({
                url: `/${id}`,
                method: 'PATCH',
                body: { applications: newApplicationsArr },
            })
        }),

        deleteUsersCv: builder.mutation<User, { id: string, newCvsArr: string[] }>({
            query: ({ id, newCvsArr }) => ({
                url: `/${id}`,
                method: 'PATCH',
                body: { cvs: newCvsArr },
            })
        })
    }),
});


export const { useGetUserByUsernameQuery, useIsUserNameUniqueQuery, useAddUserMutation, useUpdateUsernameMutation, useDeleteUsersApplicationMutation, useDeleteUsersCvMutation } = userApi;
