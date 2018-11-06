pipe(
  mutate(setQuery),
  debounce(200),
  filter(isQueryNotEmpty),
  mutate(setResultFetching),
  map(fetchResult),
  mutate(setResult)
);
