import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Determine environment settings
let baseUrl = () => {
    let baseUrl = '';
    switch (process.env.NODE_ENV) {
        case 'development':
            baseUrl = 'http://localhost:4445/';
        case 'production':
            baseUrl = 'https://beta.changecompanies.net/media/';
        default:
            baseUrl = 'https://beta.changecompanies.net/media/';
    }
    return baseUrl;
}

// Define a service using a base URL and expected endpoints
export const mediaApi = createApi({
    reducerPath: 'mediaApi',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl()}),
    endpoints: (builder) => ({
        getLessons: builder.query({
            query: () => `lesson`,
        }),
        getLesson: builder.query({
            query: (id) => `lesson/${id}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetLessonsQuery,
    useGetLessonQuery,
} = mediaApi