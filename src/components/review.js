import Image from "next/image";
import React from "react";
import wiselogo from "../../assets/wiselogo.svg";
import avatar from "../../assets/avatar.svg";
import frame from "../../assets/frame.svg";

export default function Review() {
  return (
    <div className="review">
      <div className="companyName">
        <Image src={wiselogo} width={98} height={24} alt="logo" />
      </div>
      <div className="reviewText">
        I had the pleasure of experiencing the next generation of card solutions
        with this incredible product. It is refreshing to see such innovation in
        the financial industry.
      </div>
      <div className="reviewer">
        <Image src={avatar } width={48} height={48} alt="avatar " />
        <div className="reviewerName">heythere</div>
        <div className="reviwerPosition">lead designer</div>
      </div>
      <div className="rating">
        <Image src={frame} width={16} height={16} alt="star" />
        <Image src={frame} width={16} height={16} alt="star" />
        <Image src={frame} width={16} height={16} alt="star" />
        <Image src={frame} width={16} height={16} alt="star" />
      </div>
    </div>
  );
}
