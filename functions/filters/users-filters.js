module.exports = (query) => {
  const filter = {};

  // Exclude admin users
  filter.role = { $ne: 'admin' };

  if (query?.companyRole?.length >= 3) {
    filter.companyRole = { $regex: query.companyRole, $options: 'i' };
  }

  // Minimum 3 characters for searching by name
  if (query?.search?.length >= 3) {
    filter.name = { $regex: query.search, $options: 'i' };
  }

  if (query?.active) {
    filter.active = query?.active;
  }

  return filter;
};
