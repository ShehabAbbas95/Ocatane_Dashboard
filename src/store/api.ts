import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/users" }),
  endpoints: (builder) => ({
    // keep it for now we will use other endpoints in the future
    getExample: builder.query({
      query: () => "example",
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetExampleQuery } = api;
