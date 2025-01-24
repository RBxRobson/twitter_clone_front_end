import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootReducer } from '../store'; 

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rbxrobson.pythonanywhere.com/',
    prepareHeaders: (headers, { getState, endpoint }) => {
      // Verifica se o endpoint atual requer autenticação
      const requiresAuth = [
        'fetchCurrentUser',
        'createPost',
        'followUser',
        'unfollowUser',
        'userRecommendations',
      ].includes(endpoint);
      
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
    createPost: builder.mutation({
      query: (credentials) => ({
        url: 'postings/posts/',
        method: 'POST',
        body: credentials,
      }),
    }),
    listFollowing: builder.query<User[], number>({
      query: (userId) => ({
        url: `accounts/users/${userId}/following/`,
      }),
    }),
    listFollowers: builder.query<User[], number>({
      query: (userId) => ({
        url: `accounts/users/${userId}/followers/`,
      }),
    }),
    userRecommendations: builder.query<User[], number>({
      query: (userId) => ({
        url: `accounts/users/${userId}/recommendations/`,
      }),
    }),
    followUser: builder.mutation({
      query: (userId: number) => ({
        url: `accounts/users/${userId}/follow/`,
        method: 'POST',
      }),
    }),
    unfollowUser: builder.mutation({
      query: (userId: number) => ({
        url: `accounts/users/${userId}/unfollow/`,
        method: 'POST',
      }),
    }),
    fetchCurrentUser: builder.query<User, void>({
      query: () => 'accounts/users/me/',
    }),
    getUsers: builder.query<User[], void>({
      query: () => 'accounts/users/',
    }),
    getUser: builder.query<User, number | string>({
      query: (user) => ({
        url: `accounts/users/${user}/`,
      }),
    }),
  }), 
});

export const { 
  useCreateUserMutation, 
  useLoginUserMutation, 
  useFetchCurrentUserQuery,
  useCreatePostMutation,
  useGetUsersQuery,
  useFollowUserMutation,
  useUnfollowUserMutation,
  useListFollowingQuery,
  useListFollowersQuery,
  useUserRecommendationsQuery,
  useGetUserQuery,
} = api;

export default api;
