import { api } from "../api";

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
