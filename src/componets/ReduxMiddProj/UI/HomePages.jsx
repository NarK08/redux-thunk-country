import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { List } from "../Style/List";
import { Card } from "../Style/Card";
import { Filters } from "../Style/Filters";
import { useEffect } from "react";
import {
  selectCountriesInfo,
  selectFilteredCountries,
} from "../country/countrySelector";
import { loadCountries } from "../country/countryAction";
import { selectFilters } from "../filter/filterSelector";

export const HomePages = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { search, region } = useSelector(selectFilters);
  const countries = useSelector((state) =>
    selectFilteredCountries(state, { search, region })
  );
  const { status, error, number } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!number) {
      dispatch(loadCountries());
    }
  }, [number, dispatch]);

  return (
    <>
      <Filters />
      {error && <h2>Cant Fetch</h2>}
      {status === "loading" && <h2>Loading ...</h2>}
      {status === "received" && (
        <List>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: "Population",
                  description: c.population.toLocaleString(),
                },
                {
                  title: "Region",
                  description: c.region,
                },
                {
                  title: "Capital",
                  description: c.capital,
                },
                {
                  title: "CallingCodes",
                  description: c.callingCodes,
                },
              ],
            };

            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}
    </>
  );
};
