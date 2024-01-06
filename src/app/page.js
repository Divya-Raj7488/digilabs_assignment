import NextGenCards from "../components/nextGenCards";
import NewCardSoln from "../components/newCardSoln";
import Review from "../components/review";
import Navbar from "../components/navbar";
import ElevateCard from "../components/elevateCard";
import Footer from "../components/footer";
import { FeatureDescription,FeatureImages } from "../components/elevateCard";

export default function Home() {
  return (
    <main className="mainContainer">
      <Navbar />
      <NextGenCards />
      <ElevateCard>
        <FeatureDescription />
      </ElevateCard>
      <ElevateCard>
        <FeatureImages />
      </ElevateCard>
      <Review />
      <NewCardSoln />
      <Footer />
    </main>
  );
}
