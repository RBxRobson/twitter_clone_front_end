import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rbxrobson.pythonanywhere.com/'
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userData) => ({
        url: 'accounts/users/',
        method: 'POST',
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: 'accounts/login/',
        method: 'POST',
        body: credentials,
      }),
    }),
  })
});

export const { useCreateUserMutation, useLoginUserMutation } = api;
export default api;
