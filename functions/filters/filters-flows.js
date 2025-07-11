const filtersFlows = (query) => {
  const select = {};

  if (query?.primary) {
    select.isPrimary = true;
  }
  return select;
};
export default filtersFlows;
