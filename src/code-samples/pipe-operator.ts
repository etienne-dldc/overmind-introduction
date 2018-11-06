function pipe(...operators) {
  return (err, context, next, final = next) => {
    if (err) next(err);
    else {
      // run each operator one after the other
      // if an operator return a Promise
      // wait for the Promise to resolve (or reject)
      // before moving to the next
    }
  };
}
