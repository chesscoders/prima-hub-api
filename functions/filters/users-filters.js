module.exports = (query) => {
  // const filter = {};
  const filter = { role: query?.role };

  // Minimum 3 characters for searching by name
  if (query?.search?.length >= 3) {
    filter.name = { $regex: query.search, $options: 'i' };
  }

  // Type filter
  if (query?.type && query?.type !== 'all') {
    filter.projectAccess = query?.type;
  }

  // City filter
  if (query?.city && query?.city !== 'all') {
    filter.city = query?.city;
  }

  if (query?.active) {
    filter.active = query?.active;
  }

  return filter;
};
