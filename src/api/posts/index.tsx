import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ItemApp } from "@/models/user";

const BASE_URL = 'http://localhost:5000';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({

        getAllApplications: builder.query<ItemApp[], string | undefined>({
            query: (excludedUsername) => {

                if (excludedUsername) {
                    return `/applications?author_id_ne=${excludedUsername}`;
                }

                return `/applications`;
            },
        }),

        setApplication: builder.mutation<ItemApp & { id: string }, ItemApp>({
            query: (newApplication) => ({
                url: '/applications',
                method: 'POST',
                body: newApplication,
            }),
        }),

        getApplicationByAuthor: builder.query<ItemApp[], string>({
            query: (user_id) => `/applications?author_id=${user_id}`,
        }),
    }),
});

export const { useGetAllApplicationsQuery, useSetApplicationMutation, useGetApplicationByAuthorQuery } = postsApi;
