const myAction = async ({
  api,
  state,
  value: query
}) => {
  state.isLoading = true;
  const result = await api.getResult(query);
  state.result = result;
  state.isLoading = false;
};

// the the view
myAction("this-is-the-query");
