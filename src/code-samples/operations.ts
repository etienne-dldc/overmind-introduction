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

export const setResultFetching = mutate(
  ({ state }) => {
    state.data.loading = true;
  }
);

export const setResult = mutate(
  ({ state, value: result }) => {
    state.data.loading = false;
    state.data.result = result;
  }
);
