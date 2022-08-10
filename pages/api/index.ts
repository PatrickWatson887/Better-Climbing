// // Need to use the React-specific entry point to allow generating React hooks
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { Coach } from 'types/features'

// // Define a service using a base URL and expected endpoints
// export const coachesApi = createApi({
//   reducerPath: 'coachesApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.better-climbing.com:444' }),
//   endpoints: (builder) => ({
//     getCoachesWithTags: builder.query<Coach[], void>({
//       query: () => `coach/getAllWithTags`,
//       transformResponse: (response: Coach[]) => {
//         return response
//       }
//     }),
//   }),
// })

// // Export hooks for usage in function components, which are
// // auto-generated based on the defined endpoints
// export const getCoachesWithTags  = coachesApi.endpoints.getCoachesWithTags.useQuery