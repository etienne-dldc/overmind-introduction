import { pipe, Pipe, debounce } from "overmind";
import {
  setQuery,
  filterIsQueryNotEmpty,
  setResultFetching,
  fetchResult,
  setResult
} from "./operations";

const onQueryInputChangeAction: Pipe<
  string
> = pipe(
  setQuery,
  debounce(200),
  filterIsQueryNotEmpty,
  setResultFetching,
  fetchResult,
  setResult
);

const actions = {
  onQueryInputChangeAction
};
