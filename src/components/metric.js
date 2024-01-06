import React from "react";

export default function Metric() {
  const Data = [
    {
      id: 1,
      number: "2 MILLION",
      name: "customer",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      id: 2,
      number: "1 K",
      name: "Downloads",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      id: 3,
      number: "$73 MILLION",
      name: "Transaction",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      id: 4,
      number: "2.0",
      name: "Latest Version",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
  ];
  return (
    <div className="metric">
      {Data.map(({ id, number, name, description }) => {
        return (
          <div key={id} className="metricBox">
            <div className="metricNum">{number}</div>
            <div className="metricName">{name}</div>
            <div className="metricDescription">{description}</div>
          </div>
        );
      })}
    </div>
  );
}
