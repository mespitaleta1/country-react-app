import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Coin from "../icons/Coin";
import Lang from "../icons/Lang";

import styles from "./styles.module.css";

const CountryCard = (props) => {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-start">
          <div>
            <img className={styles.flag} src={props.flag} alt={props.name} />
          </div>

          <div>
            <Card.Title className={styles.name}>{props.name}</Card.Title>
            <Card.Subtitle>{props.capital}</Card.Subtitle>
            <Card.Text className={styles.region}>{props.region}</Card.Text>
          </div>
        </div>
        <div className={styles.detail}>
          <div className="d-flex justify-content-start align-items-center">
            <Lang className={styles.icon} />
            <div>
              {props.languages.map((language, index) => (
                <span key={index}>{language["iso639_2"]} /</span>
              ))}
            </div>
          </div>

          <div className="d-flex justify-content-start align-items-center">
            <Coin className={styles.icon} />
            <div>
              {props.currencies.map((currency, index) => (
                <span key={index}>{currency.code} /</span>
              ))}
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;
