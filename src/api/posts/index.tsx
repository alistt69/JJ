import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ItemApp, ItemCvs, User } from "@/models/user";

const BASE_URL = 'http://localhost:5000';


export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({

        getAllApplications: builder.query<ItemApp[], string | undefined>({
            query: (excludedUsername) => {
                if (excludedUsername) return `/applications?author_id_ne=${excludedUsername}`
                return `/applications`;
            },
        }),

        getAllCvs: builder.query<ItemCvs[], string | undefined>({
            query: (excludedUsername) => {
                if (excludedUsername) return `/cvs?author_id_ne=${excludedUsername}`
                return `/cvs`;
            },
        }),

        getApplicationByAuthor: builder.query<ItemApp[], string>({
            query: (user_id) => `/applications?author_id=${user_id}`,
        }),

        getCvsByAuthor: builder.query<ItemCvs[], string>({
            query: (user_id) => `/cvs?author_id=${user_id}`
        }),

        addApplication: builder.mutation<ItemApp & { id: string }, ItemApp>({
            query: (newApplication) => ({
                url: '/applications',
                method: 'POST',
                body: newApplication,
            }),
        }),

        addCv: builder.mutation<ItemCvs & { id: string }, ItemCvs>({
            query: (newCv) => ({
                url: '/cvs',
                method: 'POST',
                body: newCv,
            }),
        }),

        deletePost: builder.mutation<User, { post_id: string; post_type: string }>({
            query: ({ post_id, post_type }) => ({
                url: `/${post_type}/${post_id}`,
                method: 'DELETE',
            }),
        }),

        editPost: builder.mutation<User, { post_id: string; post_type: string, new_post: ItemApp | ItemCvs}>({
            query: ({ post_id, post_type, new_post }) => ({
                url: `/${post_type}/${post_id}`,
                method: 'PATCH',
                body: new_post
            }),
        })
    }),
});

export const { useGetAllApplicationsQuery, useGetAllCvsQuery, useGetApplicationByAuthorQuery, useGetCvsByAuthorQuery, useAddApplicationMutation, useAddCvMutation, useDeletePostMutation, useEditPostMutation } = postsApi;
