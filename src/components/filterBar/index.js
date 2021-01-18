import React from "react";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Lens from "../icons/Lens";
import styles from "./styles.module.css";

//import Input from "react-bootstrap/Input";

const SearchBar = () => {
  return (
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="btnSearchBar">
          <Lens />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        type="text"
        placeholder="Search your favorite country"
        aria-label="Search"
        aria-describedby="btnSearchBar"
      />
    </InputGroup>
  ); //<input type="text" placeholder="Search.."></input>;
};

const FilterSideBar = () => {
  return (
    <Form>
      <Form.Group controlId="formGroups" className={styles.form}>
        <Form.Group>
          <Form.Check id={`name`} label={`NAME`} />
          <Form.Control type="text" placeholder="Enter the name country" />
        </Form.Group>
        <Form.Group>
          <Form.Check id={`capital_city`} label={`CAPITAL CITY`} />
          <Form.Control type="text" placeholder="Enter the capital city" />
        </Form.Group>
        <Form.Group>
          <Form.Check id={`continent`} label={`CONTINENT`} />
          <Form.Control type="text" placeholder="Enter the continent" />
        </Form.Group>
        <Form.Group>
          <Form.Check id={`calling_code`} label={`CALLING CODE`} />
          <Form.Control type="text" placeholder="Enter the calling call" />
        </Form.Group>
        <Form.Group>
          <Form.Check id={`language`} label={`LANGUAGE`} />
          <Form.Control type="text" placeholder="Enter the language" />
        </Form.Group>
      </Form.Group>
    </Form>
  );
};

const FilterBar = () => {
  return (
    <>
      <FilterSideBar />
    </>
  );
};
export default FilterBar;
