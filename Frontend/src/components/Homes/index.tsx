import Banner from "../Banners";
import Carousel from "./Carousel";
const Home = () => {
  return (
    <>
      <Banner />
      <main className="mb-16">
        <div className="container max-w-screen-lg  mt-12 mx-auto px-5 md:px-0">
          <h2 className="text-xl font-medium mb-4">Tuyến đường phổ biến</h2>
          <Carousel />
        </div>
      </main>
    </>
  );
};

export default Home;
