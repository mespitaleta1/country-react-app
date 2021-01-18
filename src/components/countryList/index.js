import React, { useState } from "react";
import CountryCard from "../countryCard";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import CountryMap from "../countryMap";

import styles from "./styles.module.css";

const CountryList = ({ countries }) => {
  const [showDetail, SetShowDetail] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleClose = () => SetShowDetail(false);
  const handleShow = (country) => {
    setSelectedCountry(country);
    SetShowDetail(true);
  };

  return (
    <>
      <div className={styles.countryGrid}>
        {countries.map((country, index) => {
          return (
            <CountryCard key={index} onHandleShow={handleShow} {...country} />
          );
        })}
      </div>
      {selectedCountry && (
        <Modal show={showDetail} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedCountry.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex  flex-wrap">
              <div className={styles.countryDetail}>
                <h6> {selectedCountry.population}</h6>
                <p className={styles.nameDetail}> POPULATION </p>
              </div>

              <div className={styles.countryDetail}>
                <h6>{selectedCountry.alpha3Code}</h6>
                <p className={styles.nameDetail}> ABBREVATION </p>
              </div>

              <div className={styles.countryDetail}>
                <h6> {selectedCountry.topLevelDomain.join(" / ")} </h6>
                <p className={styles.nameDetail}> DOMAIN </p>
              </div>

              <div className={styles.countryDetail}>
                <h6> {selectedCountry.subregion}</h6>
                <p className={styles.nameDetail}> SUBREGION </p>
              </div>

              <div className={styles.countryDetail}>
                <h6>
                  {" "}
                  {selectedCountry.languages.map((language, index) => (
                    <span key={index}>{language["iso639_2"]} /</span>
                  ))}
                </h6>
                <p className={styles.nameDetail}> LANGUAGES </p>
              </div>

              <div className={styles.countryDetail}>
                <h6> {selectedCountry.altSpellings.join(" / ")} </h6>
                <p className={styles.nameDetail}> FULL NAME </p>
              </div>
            </div>
          </Modal.Body>

          <CountryMap latlng={selectedCountry.latlng} />
        </Modal>
      )}
    </>
  );
};

export default CountryList;
