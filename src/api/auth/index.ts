import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {ItemApp, User} from "@/models/user";

const BASE_URL = 'http://localhost:5001/users';

function generateId() {
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
        addUser: builder.mutation<User, Omit<User, 'id'>>({
            query: (newUser) => {

                const applicationsWithId = newUser.applications.map(app => ({
                    ...app,
                    id: generateId(),
                }));

                const cvsWithId = newUser.cvs.map(cv => ({
                    ...cv,
                    id: generateId(),
                }));

                const userToCreate = {
                    ...newUser,
                    applications: applicationsWithId,
                    cvs: cvsWithId,
                };

                return {
                    url: '',
                    method: 'POST',
                    body: userToCreate,
                };
            },
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
    }),
});

export const { useGetUserByUsernameQuery, useAddUserMutation, useUpdateUsernameMutation, useIsUserNameUniqueQuery, useUpdateApplicationsMutation } = userApi;