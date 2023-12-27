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
    deleteFavourites: build.mutation<unknown, { id: string }>({
      query: ({ id }: { id: string }) => ({
        url: `favourites/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [{ type: 'Favourites', id: 'LIST' }]
    }),
    getFavourites: build.query<FavouritesResponse, void>({
      query: () => ({ url: 'favourites?limit=1000' }),
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
  useDeleteFavouritesMutation,
  useGetFavouritesQuery,
  useGetFavouriteByIdQuery
} = favouritesApi;
