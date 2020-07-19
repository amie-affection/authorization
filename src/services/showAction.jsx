export const showAction = (store) => (next) => (action) => {
  console.log(action);

  next(action);
};
