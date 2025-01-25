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
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi;
