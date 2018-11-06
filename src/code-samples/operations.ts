// operations.ts
import { map, filter, mutate } from "overmind";

export const filterIsQueryNotEmpty = filter(
  ({ value }) => value !== ""
);

export const fetchResult = map(
  ({ api, value: query }) =>
    api.fetchResult(query)
);

export const setQuery = mutate(
  ({ state, value: query }) => {
    state.query = query;
  }
);
