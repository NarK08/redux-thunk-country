import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { selectDetails } from "../detalis/detalisSelector";
import { useEffect } from "react";

import { Button } from "../Style/Button";
import { Info } from "../Style/Info";
import { loadCountryByName } from "../detalis/detalisActions";

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { currentCountry, error, status } = useSelector(selectDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCountryByName(name));
  }, [name, dispatch]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
