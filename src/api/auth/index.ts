import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ItemApp, ItemCvs, User } from "@/models/user";

const BASE_URL = 'http://localhost:5000/users';

export function generateId() {
    const id: string = `ID${Date.now().toString().slice(-2)}${Math.random().toString(36).substring(2, 9).toUpperCase()}`
    return id;
}

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

        updatePosts: builder.mutation<User, { id: string; newArr: (ItemApp | ItemCvs)[], haveToBeUpdated: string}>({
            query: ({ id, newArr, haveToBeUpdated }) => ({
                url: `/${id}`,
                method: 'PATCH',
                body: haveToBeUpdated === "applications" ? { applications: newArr } : { cvs: newArr },
            })
        }),
    }),
});

export const { useGetUserByUsernameQuery, useAddUserMutation, useUpdateUsernameMutation, useIsUserNameUniqueQuery, useUpdateApplicationsMutation, useUpdateCvsMutation, useUpdatePostsMutation } = userApi;