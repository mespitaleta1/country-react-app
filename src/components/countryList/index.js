import React, { useState } from "react";
import CountryCard from "../countryCard";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
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
        {countries.length > 0 ? (
          countries.map((country, index) => {
            return (
              <CountryCard key={index} onHandleShow={handleShow} {...country} />
            );
          })
        ) : (
          <Spinner animation="border" />
        )}
      </div>
      {selectedCountry && (
        <Modal show={showDetail} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedCountry.name.common}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex  flex-wrap">
              <div className={styles.countryDetail}>
                <h6> {selectedCountry.population}</h6>
                <p className={styles.nameDetail}> POPULATION </p>
              </div>

              <div className={styles.countryDetail}>
                <h6>{selectedCountry.altSpellings[0]}</h6>
                <p className={styles.nameDetail}> ABBREVATION </p>
              </div>

              <div className={styles.countryDetail}>
                <h6> {selectedCountry.tld[0]} </h6>
                <p className={styles.nameDetail}> DOMAIN </p>
              </div>

              <div className={styles.countryDetail}>
                <h6> {selectedCountry.subregion}</h6>
                <p className={styles.nameDetail}> SUBREGION </p>
              </div>

              <div className={styles.countryDetail}>
                <h6>
                    <span>{Object.values(selectedCountry.languages).join(" / ")}</span>
                </h6>
                <p className={styles.nameDetail}> LANGUAGES </p>
                  </div>

              <div className={styles.countryDetail}>
                <h6> {selectedCountry.name.official} </h6>
                <p className={styles.nameDetail}> FULL NAME </p>
              </div>
              </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default CountryList;
