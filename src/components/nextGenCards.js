import React from "react";
import Image from "next/image";
import arrowRight from "../../assets/arrowRight.svg";
import NuxtLogo from "../../assets/NuxtLogo.svg"
import miro from "../../assets/miro.svg"
import lotiefLogo from "../../assets/lotiefLogo.svg"
import wiselogo from "../../assets/wiselogo.svg"
import dribble from "../../assets/dribble.svg"
import kinstaLogo from "../../assets/kinstaLogo.svg"
import angelistlogo from "../../assets/angelistlogo.svg"
import Bihancelogo from "../../assets/Bihancelogo.svg"

export default function NextGenCards() {
  return (
    <div className="nextGenCard">
      <div className="HeadingAndDescription">
        <div className="seamlessExperience">Seamless experience</div>
        <h1 className="cardHeading">
          Unleashing the Next Generation of Card Solutions
        </h1>
        <h5 className="Description">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        </h5>
      </div>
      <button className="unlockBtn">
        <div> Unlock your card</div>
        <Image src={arrowRight} width={20} height={20} alt="arrow" />
      </button>
      <div className="requirement">*No credit cards required.</div>
      <div className="logoCloud">
        <Image src={NuxtLogo} height={32} width={112} alt="logo" />
        <Image src={miro} height={32} width={84} alt="logo" />
        <Image src={lotiefLogo} height={32} width={140} alt="logo" />
        <Image src={wiselogo} height={32} width={122} alt="logo" />
        <Image src={dribble} height={32} width={114} alt="logo" />
        <Image src={kinstaLogo} height={32} width={136} alt="logo" />
        <Image src={angelistlogo} height={32} width={118} alt="logo" />
        <Image src={Bihancelogo} height={32} width={148} alt="logo" />
      </div>
    </div>
  );
}
