import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootReducer } from '../store'; 
import { setUser } from '../store/reducers/user';

const BASE_URL = 'https://rbxrobson.pythonanywhere.com/';

const requiresAuthEndpoints = new Set([
  'fetchCurrentUser', 'createPost', 'editPost', 'deletePost', 
  'followUser', 'unfollowUser', 'userRecommendations', 'likePost',
  'getUserPosts', 'getUser', 'getUsers', 'updateUser', 'getUserFeed', 
  'getPosts', 'listFollowing', 'listFollowers', 'getPostQuotes', 'getPostReposts'
]);

export const tags = [
  'UserPosts', 'UserProfile', 'UserFeed', 'Posts',
  'ListFollowing', 'ListFollowers', 'UserRecommendations'
];

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState, endpoint }) => {
      if (requiresAuthEndpoints.has(endpoint)) {
        const token = (getState() as RootReducer).tokenJwt.token;
        if (token) headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: tags,
  endpoints: (builder) => ({
    fetchCurrentUser: builder.query<User, void>({
      query: () => 'accounts/users/me/',
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setUser(data));
      }
    }),
    getUsers: builder.query<User[], void>({ 
      query: () => 'accounts/users/'
    }),
    getUser: builder.query<User, number | string>({
      query: (user) => `accounts/users/${user}/`,
      providesTags: ['UserProfile']
    }),
    getUserPosts: builder.query<Post[], number | string>({
      query: (user) => `accounts/users/${user}/posts/`,
      providesTags: ['UserPosts'],
    }),
    createUser: builder.mutation({
      query: (userData) => ({
        url: 'accounts/users/',
        method: 'POST',
        body: userData,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ userData, userId }) => ({
        url: `accounts/users/${userId}/`,
        method: 'PUT',
        body: userData,
      }),
      invalidatesTags: ['UserProfile', 'UserPosts']
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: 'accounts/login/',
        method: 'POST',
        body: credentials,
      }),
    }),
    listFollowing: builder.query<User[], number | string>({
      query: (userId) => `accounts/users/${userId}/following/`,
      providesTags: ['ListFollowing']
    }),
    listFollowers: builder.query<User[], number | string>({
      query: (userId) => `accounts/users/${userId}/followers/`,
      providesTags: ['ListFollowers']
    }),
    userRecommendations: builder.query<User[], number>({
      query: (userId) => `accounts/users/${userId}/recommendations/`,
      providesTags: ['UserRecommendations']
    }),
    followUser: builder.mutation({
      query: (userId: number) => ({
        url: `accounts/users/${userId}/follow/`,
        method: 'POST',
      }),
      invalidatesTags: ['UserFeed', 'ListFollowers', 'ListFollowing', 'UserRecommendations']
    }),
    unfollowUser: builder.mutation({
      query: (userId: number) => ({
        url: `accounts/users/${userId}/unfollow/`,
        method: 'POST',
      }),
      invalidatesTags: ['UserFeed', 'ListFollowers', 'ListFollowing', 'UserRecommendations']
    }),
    getUserFeed: builder.query<Post[], void>({
      query: () => 'postings/feed/',
      providesTags: ['UserFeed']
    }),
    getPosts: builder.query<Post[], void>({
      query: () => 'postings/posts/',
      providesTags: ['Posts']
    }),
    getPostQuotes: builder.query<Post[], string>({
      query: (postId) => ({
        url: `postings/posts/${postId}/quotes/`,
        method: 'GET',
      }),
    }),
    getPostReposts: builder.query<User[], string>({
      query: (postId) => ({
        url: `postings/posts/${postId}/reposts/`,
        method: 'GET',
      }),
    }),
    createPost: builder.mutation({
      query: (postData) => ({
        url: 'postings/posts/',
        method: 'POST',
        body: postData,
      }),
      invalidatesTags: ['Posts', 'UserFeed', 'UserPosts']
    }),
    editPost: builder.mutation({
      query: ({ postId, postData }) => ({
        url: `postings/posts/${postId}/`,
        method: 'PUT',
        body: postData,
      }),
      invalidatesTags: ['Posts', 'UserFeed', 'UserPosts']
    }),
    deletePost: builder.mutation({
      query: (postId) => ({
        url: `postings/posts/${postId}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['UserPosts', 'Posts', 'UserFeed']
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
  useCreateUserMutation, useLoginUserMutation, useFetchCurrentUserQuery,
  useCreatePostMutation, useGetUsersQuery, useFollowUserMutation,
  useUnfollowUserMutation, useListFollowingQuery, useListFollowersQuery,
  useUserRecommendationsQuery, useGetUserQuery, useGetUserPostsQuery,
  useLikePostMutation, useDeletePostMutation, useEditPostMutation,
  useUpdateUserMutation, useGetUserFeedQuery, useGetPostsQuery,
  useGetPostQuotesQuery, useGetPostRepostsQuery
} = api;

export default api;
