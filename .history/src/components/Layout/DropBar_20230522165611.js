/** @format */

import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from 'react-bootstrap/DropdownButton';

const DropBar = () => {
  return (
    <>
      <section>
        <div>
          <i className="fas fa-bars" />
        </div>

        <div>
          <Dropdown>
            <Dropdown.Toggle variant="none" id="dropdown-basic">
              Service
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">  <DropdownButton
              id={`dropdown-button-drop-end`}
              drop={`end`}
              variant="none"
            >
              <Dropdown.Item eventKey="1">Currency Exchange</Dropdown.Item>
            </DropdownButton></Dropdown.Item>
           
        
            </Dropdown.Menu>
          </Dropdown>

        </div>
      </section>
    </>
  );
};

export default DropBar;
