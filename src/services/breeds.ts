import { api } from './api';

export interface Breed {
  weight: {
    imperial: string;
    metric: string;
  };
  height: {
    imperial: string;
    metric: string;
  };
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  origin: string;
  reference_image_id: string;
  image: {
    id: string;
    width: number;
    height: number;
    url: string;
  };
}

type BreedsResponse = Breed[];
type BreedIdResponse = Breed;

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

export const breedsApi = api.injectEndpoints({
  endpoints: build => ({
    getBreeds: build.query<BreedsResponse, { limit?: number; page?: number }>({
      query: ({ limit = 6, page = 0 }) => ({
        url: `breeds?limit=${limit}&page=${page}`
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Breeds', id }) as const),
        { type: 'Breeds' as const, id: 'LIST' }
      ]
    }),
    getBreedById: build.query<BreedIdResponse, { id?: number }>({
      query: ({ id }) => ({
        url: `breeds/${id}`
      })
    })
  })
});

export const { useGetBreedsQuery, useGetBreedByIdQuery } = breedsApi;
