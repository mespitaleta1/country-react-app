import React from "react";
import CountryCard from "../countryCard";

import styles from "./styles.module.css";

const CountryList = ({ countries }) => {
  return (
    <div className={styles.countryGrid}>
      {countries.map((country, index) => {
        return <CountryCard key={index} {...country} />;
      })}
    </div>
  );
};

export default CountryList;
