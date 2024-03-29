import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";

import CountryList from "../countryList";
import FilterBar from "../filterBar";
import Hero from "../hero";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [currentFilter, setCurrentFilter] = useState();

  useEffect(() => {
    const getUrl = () => {
      const baseUrl = "https://restcountries.com/v3.1/";
      const fieldsUrl =
        "all?fields=name,capital,region,currencies,languages"; 
      if (currentFilter) {
        return `${baseUrl}/${currentFilter.active}/${currentFilter.value}`;
      } else {
        return `${baseUrl}all?${fieldsUrl}`;
      }
    };
    axios
      .get(getUrl())
      .then((res) => {
        setCountries(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentFilter]);

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
