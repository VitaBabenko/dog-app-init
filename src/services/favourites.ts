import { api } from './api';

export interface Favourite {
  image_id: string;
  sub_id?: string;
}

type FavouriteResponse = {
  created_at: string;
  id: string;
  image: {
    id: string;
    url: string;
  };
  image_id: string;
  sub_id: string | null;
  user_id: string;
}[];

export const favouriteApi = api.injectEndpoints({
  endpoints: build => ({
    addFavourites: build.mutation<unknown, Favourite>({
      query: body => ({
        url: `favourites`,
        method: 'POST',
        body
      }),
      invalidatesTags: [{ type: 'Favourites', id: 'LIST' }]
    }),
    getFavourites: build.query<FavouriteResponse, void>({
      query: () => ({ url: 'favourites' }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Favourites', id }) as const),
        { type: 'Favourites' as const, id: 'LIST' }
      ]
    })
  })
});

export const { useAddFavouritesMutation, useGetFavouritesQuery } = favouriteApi;
