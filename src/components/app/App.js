import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";

import "./App.css";
import CountryList from "../countryList";
import FilterBar from "../filterBar";

function App() {
  const DATA_URL =
    "https://restcountries.eu/rest/v2/all?fields=flag;name;capital;region;currencies;languages;altSpellings;alpha3Code;topLevelDomain;population;subregion;latlng";

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get(DATA_URL)
      .then((res) => {
        setCountries(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container>
      <div className="d-flex ">
        <FilterBar />
        <CountryList countries={countries} />
      </div>
    </Container>
  );
}

export default App;
