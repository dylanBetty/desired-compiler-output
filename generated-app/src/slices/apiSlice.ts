import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Person = {
  name: string;
  id: string;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builder) => ({
    getPerson: builder.query<Person, string>({
      query: (id) => `/people/${id}`,
    }),
    updatePerson: builder.mutation<Person, { id: string; name: string }>({
      query: ({ id, name }) => ({
        method: "POST",
        url: `/people/${id}`,
        body: { name },
      }),
    }),
  }),
});

export const { useGetPersonQuery, useUpdatePersonMutation } = apiSlice;
