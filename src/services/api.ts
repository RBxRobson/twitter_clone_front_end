import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootReducer } from '../store'; 
import { setUser } from '../store/reducers/user';

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
        'createComment',
        'createReply',
        'editPost',
        'editReply',
        'editComment',
        'getUser',
        'getUsers',
        'updateUser'
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
  tagTypes: ['UserPosts', 'UserProfile'],
  endpoints: (builder) => ({
    fetchCurrentUser: builder.query<User, void>({
      query: () => 'accounts/users/me/',
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setUser(data));
      }
    }),
    getUsers: builder.query<User[], void>({
      query: () => 'accounts/users/',
    }),
    getUser: builder.query<User, number | string>({
      query: (user) => ({
        url: `accounts/users/${user}/`,
        providesTags: ['UserProfile']
      }),
    }),
    getUserPosts: builder.query<Post[], number | string>({
      query: (user) => ({
        url: `accounts/users/${user}/posts/`
      }),
      providesTags: ['UserPosts']
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
      })
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
      invalidatesTags: ['UserPosts']
    }),
    editPost: builder.mutation({
      query: ({ postId, postData }) => ({
        url: `postings/posts/${postId}/`,
        method: 'PUT',
        body: postData,
      }),
      invalidatesTags: ['UserPosts']
    }),
    createComment: builder.mutation({
      query: ({ postId, commentData }) => {
        return {
          url: `postings/posts/${postId}/comments/`,
          method: 'POST',
          body: commentData,
        };
      },
    }),
    editComment: builder.mutation({
      query: ({ postId, commentData, commentId }) => {
        return {
          url: `postings/posts/${postId}/comments/${commentId}/`,
          method: 'PUT',
          body: commentData,
        };
      },
    }),
    createReply: builder.mutation({
      query: ({postId, commentId, commentData}) => ({
        url: `postings/posts/${postId}/comments/${commentId}/replies/`,
        method: 'POST',
        body: commentData,
      }),
    }),
    editReply: builder.mutation({
      query: ({ postId, commentData, commentId, replyId }) => {
        return {
          url: `postings/posts/${postId}/comments/${commentId}/replies/${replyId}/`,
          method: 'PUT',
          body: commentData,
        };
      },
    }),
    deletePost: builder.mutation({
      query: (postId) => ({
        url: `postings/posts/${postId}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['UserPosts']
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
  useEditPostMutation,
  useEditCommentMutation,
  useEditReplyMutation,
  useUpdateUserMutation
} = api;

export default api;
