/** @format */

import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const DropBar = () => {
  const menu = [
    {
      name: "Service",
      item: [
        {
          name: "Currency Exchange",
          subItem: [
            "Currency Exchange in Mumbai",
            "Currency Exchange in Kolkata",
            "Currency Exchange in Chennai",
            "Currency Exchange in Hyderabad",
            "Currency Exchange in Pune" , 
            "Currency Exchange in Ahmedabad" , 
            "Currency Exchange in Gurgaon" ,
            "Currency Exchange in Noida" ,
            "Currency Exchange in Banglore",
            "More"
          ],
        },
        {
          name: "Send Money Abroad",
          subItem: [
            "Send Money to USA",
            "Send Money to UK",
            "Send Money to Singpore",
            "Send Money to Australia",
            "Send Money to Canada",
            "Send Money to Germany",
            "Send Money to New Zealand",
            "Send Money to Europe",
            "Send Money to UAE"
          ],
        },
        {
          name: "Tour & Activities",
        },
        {
          name: "International Sim Card",
        },
        {
          name: "Trade Remittance",
        },
        {
          name: "Forex as a Service (Faas) Solution",
        },
      ],
    },
    {
      name: "Top Currencies",
    },
    {
      name: "Currency Convertor",
    },
    {
      name: "FAQ",
    },
    {
      name: "Offers",
    },
  ];

  return (
    <>
      <section className="Drop-Category-Bar">
        <div className="left-container">
          <i className="fas fa-bars" />
        </div>

        <div className="right-Container">
          {menu.map((i, index) => (
            <Dropdown key={index}>
              <Dropdown.Toggle variant="none" id="dropdown-basic">
                {i.name}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {i?.item?.map((ite, index) => (
                  <DropdownButton
                    id={`dropdown-button-drop-end`}
                    drop={`end`}
                    variant="none"
                    title={`${ite.name}`}
                    key={index}
                  >
                    {ite?.subItem?.map((name, index) => (
                      <Dropdown.Item eventKey={index} key={index}>
                        {name}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          ))}
        </div>
      </section>
    </>
  );
};

export default DropBar;