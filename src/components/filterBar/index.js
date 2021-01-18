import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./styles.module.css";

const FilterSideBar = (props) => {
  const [active, setActive] = useState("");
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    if (target.type === "checkbox") {
      if (value) {
        setActive(name);
      } else {
        setActive("");
      }
    } else {
      setValue(value);
    }
  };

  const handleCleanFilter = () => {
    setActive("");
    setValue("");
    props.onHandleFilterSubmit(null);
  };

  return (
    <Form>
      <Form.Group controlId="formGroups">
        <Form.Group>
          <Form.Check
            checked={active === "name"}
            onChange={(e) => handleInputChange(e)}
            name="name"
            label={`NAME`}
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            checked={active === "capital"}
            onChange={(e) => handleInputChange(e)}
            name="capital"
            label={`CAPITAL CITY`}
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            checked={active === "region"}
            onChange={(e) => handleInputChange(e)}
            name="region"
            label={`CONTINENT`}
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            checked={active === "callingcode"}
            onChange={(e) => handleInputChange(e)}
            name="callingcode"
            label={`CALLING CODE`}
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            checked={active === "lang"}
            onChange={(e) => handleInputChange(e)}
            name="lang"
            label={`LANGUAGE`}
          />
          <Form.Control
            type="text"
            placeholder="Enter filter value"
            onChange={(e) => handleInputChange(e)}
            value={value}
          />
        </Form.Group>
      </Form.Group>

      <Button
        className={styles.button}
        disabled={!value}
        variant="primary"
        onClick={() => props.onHandleFilterSubmit({ active, value })}
      >
        Filter
      </Button>
      <Button disabled={!value} variant="primary" onClick={handleCleanFilter}>
        Clear Filter
      </Button>
    </Form>
  );
};

const FilterBar = (props) => {
  return (
    <div className={styles.filterForm}>
      <FilterSideBar {...props} />
    </div>
  );
};
export default FilterBar;
