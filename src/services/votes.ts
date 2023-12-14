import { api } from './api';

export interface VoteAdd {
  image_id: string;
  sub_id?: string;
  value: string;
}

export interface Vote {
  id: number;
  image_id: string;
  sub_id: string;
  created_at: string;
  value: number;
  country_code: string;
  image: {
    id: string;
    url: string;
  };
}

type VotesResponse = Vote[];

export const votesApi = api.injectEndpoints({
  endpoints: build => ({
    addVotes: build.mutation<unknown, VoteAdd>({
      query: body => ({
        url: 'votes',
        method: 'POST',
        body
      }),
      invalidatesTags: [{ type: 'Votes', id: 'LIST' }]
    }),
    getVotes: build.query<VotesResponse, void>({
      query: () => ({ url: 'votes' }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Votes', id }) as const),
        { type: 'Votes' as const, id: 'LIST' }
      ]
    })
  })
});

export const { useAddVotesMutation, useGetVotesQuery } = votesApi;
