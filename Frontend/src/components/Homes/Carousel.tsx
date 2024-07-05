import Card from "./Card";

const Carousel = () => {
  return (
    <div className="carousel max-w-[980px] h-[211px] relative overflow-hidden">
      <div className="carousel-container grid grid-rows-1 grid-cols-2   md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-full min-h-full   ">
        <Card
          image="./img/img_carousel.png"
          title="Sài Gòn - Nha Trang"
          new_price={200000}
          old_price={250000}
        />
        <Card
          image="./img/img_carousel-4.png"
          title="Hà Nội - Hải Phòng"
          new_price={80000}
          old_price={110000}
        />
        <Card
          image="./img/img_carousel-2.png"
          title="Hà Nội - Hải Phòng"
          new_price={200000}
          old_price={0}
        />
        <Card
          image="./img/img_carousel-3.png"
          title="Hà Nội - Hải Phòng"
          new_price={150000}
          old_price={0}
        />
        <Card
          image="./img/img_carousel-1.png"
          title="Hà Nội - Hải Phòng"
          new_price={80000}
          old_price={0}
        />{" "}
      </div>

      <span
        id="prevCarousel"
        className=" opacity-35 size-9 bg-white rounded-full absolute top-[70px] start-4 flex items-center justify-center"
      >
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.69229 12.6154L2.15383 7.07696L7.69229 1.53849"
            stroke="#707070"
            strokeWidth="1.84615"
          />
        </svg>
      </span>
      <span
        id="nextCarousel"
        className=" size-9 bg-white rounded-full absolute top-[70px] end-4 flex items-center justify-center"
      >
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.30771 1.53845L6.84617 7.07691L1.30771 12.6154"
            stroke="#707070"
            strokeWidth="1.84615"
          />
        </svg>
      </span>
    </div>
  );
};

export default Carousel;
