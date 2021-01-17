import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Coin from "../icons/Coin";
import Lang from "../icons/Lang";

import styles from "./styles.module.css";

const CountryCard = (props) => {
  return (
    <Card>
      <div className={styles.cardWrapper}>
        <div>
          <img className={styles.flag} src={props.flag} alt={props.name} />
        </div>
        <div>
          <Card.Body>
            <Row>
              <Col>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle>{props.capital}</Card.Subtitle>
              </Col>
              <Col>
                <Card.Text>{props.region}</Card.Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Lang />
                {props.languages.map((language, index) => (
                  <span key={index}>{language["iso639_2"]} -</span>
                ))}
              </Col>
              <Col>
                <Coin />
                {props.currencies.map((currency, index) => (
                  <span key={index}>{currency.code} -</span>
                ))}
              </Col>
            </Row>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default CountryCard;
