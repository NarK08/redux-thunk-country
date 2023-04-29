export const selectCountriesInfo = (state) => ({
  status: state.country.status,
  error: state.country.error,
  number: state.country.list.length,
});

export const selectAllCountries = (state) => state.country.list;
export const selectFilteredCountries = (
  state,
  { search = "", region = "" }
) => {
  return state.country.list.filter(
    (count) =>
      count.name.toLowerCase().includes(search.toLowerCase()) &&
      count.region.includes(region)
  );
};
