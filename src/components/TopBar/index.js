import React from "react";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import Lens from "../icons/Lens";

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

const FilterBar = () => {
  return <p>Filter</p>;
};

const TopBar = () => {
  return (
    <>
      <SearchBar />
      <FilterBar />
    </>
  );
};
export default TopBar;
