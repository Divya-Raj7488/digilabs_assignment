import NextGenCards from "../components/nextGenCards";
import NexGenCardSoln from "../components/nextGenCardSoln";
import Metric from "../components/metric";
import Navbar from "../components/navbar";
import ElevateCard from "../components/elevateCard";
import Review from "../components/review"
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
      <Metric />
      <Review />
      <NexGenCardSoln />
      <Footer />
    </main>
  );
}
