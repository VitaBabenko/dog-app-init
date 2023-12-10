import { api } from './api';

export interface Image {
  id: string;
  url: string;
  width: number;
  height: number;
  mime_type: string;
  breeds: [
    {
      id: number;
      name: string;
      weight: string;
      height: string;
      life_span: string;
      breed_group: string;
    }
  ];
  categories: [];
}

type ImagesResponse = Image[];
// type ImageResponse = Image;

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

export enum Order {
  RANDOM = 'RANDOM',
  ASC = 'ASC',
  DESC = 'DESC'
}

export const imagesApi = api.injectEndpoints({
  endpoints: build => ({
    getImages: build.query<
      ImagesResponse,
      { limit?: number; page?: number; order?: Order }
    >({
      query: ({ limit = 10, page = 0, order = Order.ASC }) => ({
        url: `images/search?limit=${limit}&page=${page}&order=${order}`
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Images', id }) as const),
        { type: 'Images' as const, id: 'LIST' }
      ]
    }),
    getImageById: build.query<Image, { imageId: string | undefined }>({
      query: ({ imageId }) => ({
        url: `images/${imageId}`
      })
    })
  })
});

export const { useGetImagesQuery, useGetImageByIdQuery } = imagesApi;
