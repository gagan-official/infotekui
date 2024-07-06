import ContinousCarousel from "@/components/ContinousCarousel";
import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
// import heroBg from "../../../assets/images/hero-bg.jpg";

const topSectionCarouselData = [
  "Business",
  "IT Solution",
  "Work Process",
  "Technology",
];
const section5CarouselData = [
  "Cyber Security",
  "IT Solution",
  "Techology",
  "Data Security",
];

function Section1() {
  return (
    <>
      <section
        className={`bg-[url('/assets/images/hero-bg.jpg')] py-5 relative overflow-hidden`}
      >
        <ImageComp
          src="/assets/images/mask-shape.png"
          className="absolute top-0 right-0 h-[130%] w-auto"
        />
        <ImageComp
          src="/assets/images/dot-shape.png"
          className="absolute bottom-0 left-0 h-full w-auto p-3"
        />
        <ImageComp
          src="/assets/images/frame.png"
          className="frameShape absolute w-14 bottom-[13%] left-[32%]"
        />
        <div className="mainCont flex items-center mx-auto w-4/5 relative z-10">
          <div className="leftCont w-[65%] flex flex-col gap-7">
            <h6 className="heroHeading">Best IT solution provider</h6>
            <h1 className="text-7xl font-bold">
              Excellent IT Services for Your Success
            </h1>
            <p className="font-medium text-lg my-3 w-[90%]">
              Consectetur adipiscing elit aenean scelerisque at augue vitae
              consequat quisque eget congue velit in cursus leo sed sodales est
              eget turpis.
            </p>
            <div className="btnCont flex gap-7 items-center font-semibold">
              <CustomButton href="" icon>
                Explore More
              </CustomButton>
              <button className="ripple relative rounded-full p-4 bg-[--themeColor] outline outline-1 outline-[--themeColor] outline-offset-4 text-white">
                <FaPlay />
              </button>
              Watch IT Video
            </div>
          </div>
          <div className="rightCont w-[33%]">
            <ImageComp src="/assets/images/hero.png" className="h-full -mb-5" />
          </div>
        </div>
        <ImageComp
          src="/assets/images/line-shape.png"
          className="absolute top-0 left-0 h-1/2 w-auto"
        />
      </section>
      <ContinousCarousel
        carouselData={topSectionCarouselData}
        containerClassName="bg-[--themeColor] text-white"
        imageUrl="https://infoteknextjs.vercel.app/assets/img/star.svg"
      />
      <ContinousCarousel
        carouselData={section5CarouselData}
        containerClassName="text-6xl"
        movingContClassName="!gap-12"
        imageUrl="https://infoteknextjs.vercel.app/assets/img/asterisk.svg"
        textHover
      />
    </>
  );
}

function ImageComp(props) {
  return (
    <Image
      height={1000}
      width={1000}
      alt="bg image"
      draggable={false}
      {...props}
    />
  );
}

export default Section1;
