import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";

import "./App.css";
import CountryList from "../countryList";
import TopBar from "../TopBar";

function App() {
  const DATA_URL =
    "https://restcountries.eu/rest/v2/all?fields=flag;name;capital;region;currencies;languages";

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
      <TopBar />
      <CountryList countries={countries} />
    </Container>
  );
}

export default App;
