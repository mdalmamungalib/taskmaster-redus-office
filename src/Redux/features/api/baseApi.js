import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_URL,
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json"); 
      return headers;
    },
    fetchFn: async (...args) => {
      const result = await fetch(...args);
      if (!result.ok) {
        throw new Error(`API request failed with status: ${result.status}`);
      }
      return result;
    },
  }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/task/tasks", // Match your backend endpoint here
      transformResponse: (response) => {
        if (typeof response === "string" && response.startsWith("<!DOCTYPE html>")) {
          throw new Error("Received HTML instead of JSON. Check API endpoint.");
        }
        return response;
      },
    }),
  }),
});

export const { useGetTasksQuery } = baseApi;
export default baseApi;
