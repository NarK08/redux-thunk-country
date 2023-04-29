export const SETDET_LOADING = "SETDET_LOADING";
export const SETDET_ERROR = "SETDET_ERROR";
export const SET_COUNTRY = "SET_COUNTRY";
export const SET_NEIGHBORS = "SET_NEIGHBORS";

const setDetLoading = () => ({
  type: SETDET_LOADING,
});

const setDetError = (err) => ({
  type: SETDET_ERROR,
  payload: err,
});

const setDetCountry = (country) => ({
  type: SET_COUNTRY,
  payload: country,
});

export const setNeighbors = (countries) => ({
  type: SET_NEIGHBORS,
  payload: countries,
});

export const loadCountryByName =
  (name) =>
  (dispatch, _, { client, api }) => {
    dispatch(setDetLoading());

    client
      .get(api.searchByCountry(name))
      .then(({ data }) => dispatch(setDetCountry(data[0])))
      .catch((err) => dispatch(setDetError(err.message)));
  };

export const loadNeighborsByBorder =
  (border) =>
  (dispatch, _, { client, api }) => {
    client
      .get(api.filterByCode(border))
      .then(({ data }) => dispatch(setNeighbors(data.map((n) => n.name))))
      .catch(console.error);
  };
