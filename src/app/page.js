import HouseDeals from "../components/houseDeals"
import NearbyHome from "../components/nearbyHome"
import BestDeals from "../components/bestDeals"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import HomeSearch from "../components/homeSearch"

export default function Home() {
  return (
    <main className="mainContainer">
      <Navbar/>
      <HouseDeals />
      <HomeSearch />
      <BestDeals/>
      <NearbyHome />
      <Footer />
    </main>
  )
}
