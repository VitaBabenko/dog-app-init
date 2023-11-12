import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.thedogapi.com/v1',
  prepareHeaders: headers => {
    headers.set(
      'x-api-key',
      `live_BL296k8ZeISNLSjYK8BEFc5o6dQnfT2rhnqmqRJUpj0HxD7QOJNnaZkrQmgY9WKm`
    );
    return headers;
  }
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Breeds', 'Favourites', 'Images'],
  endpoints: () => ({})
});
