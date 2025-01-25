import { api } from "../api";

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),
    getUserById: builder.query({
      query: (userId) => ({
        url: `users/${userId}`,
        method: "GET",
      }),
    }),
    updateUser: builder.mutation({
      query: (userData) => ({
        url: `users/${userData.id}`,
        method: "PUT",
        body: userData,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery, useUpdateUserMutation } =
  usersApi;
