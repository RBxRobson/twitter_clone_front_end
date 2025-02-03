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
        'deletePost',
        'followUser',
        'unfollowUser',
        'userRecommendations',
        'likePost',
        'getUserPosts',
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
      query: (postData) => ({
        url: 'postings/posts/',
        method: 'POST',
        body: postData,
      }),
    }),
    createComment: builder.mutation({
      query: ({postId, postData}) => ({
        url: `postings/posts/${postId}/comments/`,
        method: 'POST',
        body: postData,
      }),
    }),
    createReply: builder.mutation({
      query: ({postId, postData, commentId}) => ({
        url: `postings/posts/${postId}/comments/${commentId}/replies/`,
        method: 'POST',
        body: postData,
      }),
    }),
    deletePost: builder.mutation({
      query: (postId) => ({
        url: `postings/posts/${postId}/`,
        method: 'DELETE',
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
    getUserPosts: builder.query<Post[], number | string>({
      query: (user) => ({
        url: `accounts/users/${user}/posts/`,
      }),
    }),
    likePost: builder.mutation({
      query: (postId: number) => ({
        url: `postings/posts/${postId}/likes/`,
        method: 'POST',
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
  useGetUserPostsQuery,
  useLikePostMutation,
  useDeletePostMutation,
  useCreateCommentMutation,
  useCreateReplyMutation,
} = api;

export default api;
