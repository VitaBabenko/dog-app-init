import { api } from './api';

export interface FavouriteAdd {
  image_id: string;
  sub_id?: string;
}

export interface Favourite {
  created_at: string;
  id: string;
  image: {
    id: string;
    url: string;
  };
  image_id: string;
  sub_id: string | null;
  user_id: string;
}

type FavouritesResponse = Favourite[];
type FavouriteResponse = Favourite;

export const favouritesApi = api.injectEndpoints({
  endpoints: build => ({
    addFavourites: build.mutation<unknown, FavouriteAdd>({
      query: body => ({
        url: `favourites`,
        method: 'POST',
        body
      }),
      invalidatesTags: [{ type: 'Favourites', id: 'LIST' }]
    }),
    getFavourites: build.query<FavouritesResponse, void>({
      query: () => ({ url: 'favourites' }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Favourites', id }) as const),
        { type: 'Favourites' as const, id: 'LIST' }
      ]
    }),
    getFavouriteById: build.query<FavouriteResponse, { id?: number }>({
      query: ({ id }) => ({
        url: `favourites/${id}`
      })
    })
  })
});

export const {
  useAddFavouritesMutation,
  useGetFavouritesQuery,
  useGetFavouriteByIdQuery
} = favouritesApi;
