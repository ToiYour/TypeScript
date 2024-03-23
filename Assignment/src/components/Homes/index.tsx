import Carousel from "./Carousel";
import Header from "../Headers";
import Banner from "../Banners";
import Footer from "../Footers";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <main className="mb-16">
        <div className="container max-w-screen-lg  mt-12 mx-auto px-5 md:px-0">
          <h2 className="text-xl font-medium mb-4">Tuyến đường phổ biến</h2>
          <Carousel />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
