import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootReducer } from '../store'; 

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rbxrobson.pythonanywhere.com/',
    prepareHeaders: (headers, { getState, endpoint }) => {
      // Verifica se o endpoint atual requer autenticação
      const requiresAuth = ['fetchCurrentUser'].includes(endpoint);
      
      if (requiresAuth) {
        // Acessa o token armazenado no Redux
        const token = (getState() as RootReducer).tokenJwt.token;
        
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
      }

      return headers;
    },
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
    fetchCurrentUser: builder.query<User, void>({
      query: () => 'accounts/users/me/',
    }),
  }), 
});

export const { 
  useCreateUserMutation, 
  useLoginUserMutation, 
  useFetchCurrentUserQuery 
} = api;

export default api;
