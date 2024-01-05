import React from "react";

export default function Footer() {
  const footerData = [
    {
      key: 1,
      name: "Company",
      service1: "About us",
      service2: "Pricing",
      service3: "Contact us",
      service4: "Features",
    },
    {
      key: 2,
      name: "Product",
      service1: "Figma design system",
      service2: "Ios kit",
      service3: "Android kit",
      service4: "Wireframe",
    },
    {
      key: 3,
      name: "Resources",
      service1: "Templates",
      service2: "Landing pages",
      service3: "Documentation",
      service4: "Comp library",
    },
    {
      key: 4,
      name: "Legal",
      service1: "Privacy policy",
      service2: "Terms & Conditions",
      service3: "Disclaimer",
      service4: "Affiliate programme",
    },
    {
      key: 5,
      name: "Support",
      service1: "Help centre",
      service2: "Raise ticket",
      service3: "Report",
      service4: "Refund",
    },
  ];
  return (
    <div className="footer">
      {/* <div className="footerContainer"> */}
        <div className="uiDescription">
          <div className="modeUi">Mode UI</div>
          <div className="modeuiDescription">
            Mode UI is a comprehensive design system that empowers designers and
            developers to create cohesive and visually stunning user interfaces
            across various platforms and devices
          </div>
        </div>
        <div className="footerdiv">
          {footerData.map(
            ({ key, name, service1, service2, service3, service4 }) => {
              return (
                <div key={key} className="footerList">
                  <div
                    style={{
                      fontWeight: "500",
                      paddingLeft: "1rem",
                    }}
                  >
                    {" "}
                    {name}{" "}
                  </div>
                  <ul>
                    <li> {service1} </li>
                    <li> {service2} </li>
                    <li> {service3} </li>
                    <li> {service4} </li>
                  </ul>
                </div>
              );
            }
          )}
        </div>
      {/* </div> */}
     </div>
  );
}
