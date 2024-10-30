import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ItemApp, ItemCvs, User } from "@/models/user";

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
            query: (username) => `?username=${username}`,
            transformResponse: (response: User[]) => response.length > 0,
        }),

        getAllUsers: builder.query<User[], string | undefined>({
            query: (excludedUsername) => {

                if (excludedUsername) {
                    return `?username_ne=${excludedUsername}`;
                }

                return `/users`;
            },
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

        updateApplications: builder.mutation<User, { id: string; newApplications: ItemApp[] }>({
            query: ({ id, newApplications }) => ({
                url: `/${id}`,
                method: 'PATCH',
                body: { applications: newApplications },
            })
        }),

        updateCvs: builder.mutation<User, { id: string; newCvs: ItemCvs[] }>({
            query: ({ id, newCvs }) => ({
                url: `/${id}`,
                method: 'PATCH',
                body: { cvs: newCvs },
            })
        }),
    }),
});

export const { useGetUserByUsernameQuery, useAddUserMutation, useUpdateUsernameMutation, useIsUserNameUniqueQuery, useUpdateApplicationsMutation, useUpdateCvsMutation, useGetAllUsersQuery } = userApi;