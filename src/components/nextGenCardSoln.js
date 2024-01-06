import React from "react";
import creditCard from "../../assets/creditCard.svg";
import headphones from "../../assets/headphones.svg";
import Image from "next/image";

export default function NextGenCardSoln() {
  return (
    <div className="solnContainer">
      <h2 className="solnTitle">
        Unlock Limitless Possibilities with Our New Card Solutions
      </h2>
      <div className="btnBox">
        <button className="unlockBtn">
          <div> Unlock your card</div>
          <Image src={creditCard} width={20} height={20} alt="arrow" />
        </button>
        <button className="customerCare">
          <div>customer care</div>
          <Image src={headphones} width={20} height={20} alt="headphone" />
        </button>
      </div>
    </div>
  );
}
