import Image from "next/image";
import React from "react";
import purpleArrow from "../../assets/purpleArrow.svg";
import globe from "../../assets/globe.svg";
import key from "../../assets/key.svg";
import lock from "../../assets/lock.svg";
import blackDisplay from "../../assets/blackDisplay.svg"
import cardImg from "../../assets/cardImg.svg"

export default function ElevateCard({ children }) {
  return (
    <div className="elevateCard">
      <div className="textContainer">
        <h2 className="elevateCardsHeading">
          Elevating Card Programs with Cutting-Edge Technology
        </h2>
        <h5 className="elevateCardsdescription">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </h5>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "1rem",
          }}
        >
          <div className="compareFeatures">Compare all Pro features</div>
          <Image src={purpleArrow} width={20} height={20} alt="arrow" />
        </div>
        {children}
      </div>
    </div>
  );
}

const FeatureDescription = () => {
  return (
    <div className="featuresDiv">
      <div className="features">
        <Image src={globe} width={24} height={24} alt="globe" />
        <div className="featureName">Globally Accepted</div>
        <div className="featureDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod{" "}
        </div>
      </div>
      <div className="features">
        <Image src={key} width={24} height={24} alt="key" />
        <div className="featureName">Biometric Integrated</div>
        <div className="featureDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod{" "}
        </div>
      </div>
      <div className="features">
        <Image src={lock} width={24} height={24} alt="lock" />
        <div className="featureName">Fully Secured</div>
        <div className="featureDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod{" "}
        </div>
      </div>
    </div>
  );
};

const FeatureImages = () => {
  return (
    <div className="fImgContainer">
      <div className="featureImg">
        <Image src={blackDisplay} width={394} height={326} />
      </div>
      <div className="featureImg">
      <Image src={cardImg} width={394} height={326} />
      </div>
    </div>
  );
};
export { FeatureDescription, FeatureImages };
