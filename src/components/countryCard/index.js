import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const CountryCard = (props) => {
  return (
    <Card>
      <Container>
        <Row>
          <Col xs={2}>
            <img src={props.flag} alt={props.name} width="200" />
          </Col>
          <Col xs={10}>
            <Card.Body>
              <Container>
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
                    {props.languages.map((language, index) => (
                      <span key={index}>{language["iso639_2"]} -</span>
                    ))}
                  </Col>
                  <Col>
                    {props.currencies.map((currency, index) => (
                      <span key={index}>{currency.code} -</span>
                    ))}
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default CountryCard;
