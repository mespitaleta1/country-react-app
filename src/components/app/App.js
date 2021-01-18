import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";

import "./App.css";
import CountryList from "../countryList";
import FilterBar from "../filterBar";
import Hero from "../hero";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [currentFilter, setCurrentFilter] = useState();

  const getUrl = (filter) => {
    const baseUrl = "https://restcountries.eu/rest/v2/";
    const fieldsUrl =
      "fields=flag;name;capital;region;currencies;languages;altSpellings;alpha3Code;topLevelDomain;population;subregion;latlng";
    if (currentFilter) {
      return `${baseUrl}${filter.active}/${filter.value}?${fieldsUrl}`;
    } else {
      return `${baseUrl}all?${fieldsUrl}`;
    }
  };

  useEffect(() => {
    axios
      .get(getUrl(currentFilter))
      .then((res) => {
        setCountries(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentFilter, getUrl]);

  const handleFilterSubmit = (filter) => {
    setCurrentFilter(filter);
  };

  return (
    <div>
      <Hero />
      <Container fluid>
        <div className="d-flex justify-content-around mt-5">
          <FilterBar onHandleFilterSubmit={handleFilterSubmit} />
          <CountryList countries={countries} />
        </div>
      </Container>
    </div>
  );
};

export default App;
