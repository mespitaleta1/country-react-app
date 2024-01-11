import React from "react";
import Card from "react-bootstrap/Card";
import Coin from "../icons/Coin";
import Lang from "../icons/Lang";

import styles from "./styles.module.css";

const CountryCard = (props) => {
let currency = Object.values(props.currencies || {})[0];
let language = Object.values(props.languages || {})[0];

return (
    <Card className={styles.card} onClick={() => props.onHandleShow(props)}>
      <Card.Body className={styles.cardWrapper}>
        <div className="d-flex justify-content-start align-items-start">
          <div>
            <img className={styles.flag} src={props.flags.svg} alt={props.name.common} />
          </div>

          <div>
            <Card.Title className={styles.name}>{props.name.common}</Card.Title>
            <Card.Subtitle className={styles.capital}>
              {props.capital}
            </Card.Subtitle>
            <Card.Text className={styles.region}>{props.region}</Card.Text>
          </div>
        </div>
        <div className={styles.detail}>
          <div className="d-flex justify-content-start align-items-center">
            <Lang className={styles.icon} />
            <span>     
              {language}
            </span>
          </div>

          <div className="d-flex justify-content-start align-items-center">
            <Coin className={styles.icon} />
              <span>
                {currency?.name}
              </span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;
