import CustomButton from "@/components/CustomButton";
import ImageComp from "@/components/ImageComp";
import { FaPlay } from "react-icons/fa6";

function Section2() {
  const infoContData = ["Problem Solving", "Mission & Vision"];
  return (
    <section className="flex justify-center my-20 p-4 gap-8 maxlg:gap-14 maxlg:flex-col maxlg:items-center">
      {/* ########## Left Image Container ########## */}
      <div
        className={`leftCont w-3/5 h-fit lg:max-w-[26rem] lg:mr-24 relative before:border-[3px] before:border-[--themeColor] before:absolute before:left-12 before:top-20 before:w-full before:h-[88%]`}
      >
        <ImageComp
          src="/assets/images/about-01.jpg"
          className="w-full relative"
        />
        <ImageComp
          src="/assets/images/about-02.jpg"
          className="w-3/5 absolute -right-16 -bottom-16"
        />
        <button className="absolute top-1/3 left-1/2 rounded-full w-1/4 lg:w-1/3 aspect-square flex items-center justify-center bg-[--themeColor] text-white text-2xl">
          <ImageComp
            src="/assets/images/circle-text.png"
            className="w-full absolute top-0 left-0 p-2 animate-spin animDur"
          />
          <FaPlay />
        </button>
        <div className="absolute top-3/4 -left-14 flex items-center gap-4 bg-[--bgColor] shadow-md p-6 animateBounce">
          <ImageComp
            src="/assets/images/icon-1.svg"
            alt="icon-img"
            className="w-8"
          />
          <h3 className="font-bold text-2xl">6,561+</h3>
        </div>
      </div>

      {/* ########## Right Content Container ########## */}
      <div
        className={`rightCont w-4/5 lg:max-w-lg 2xl:max-w-2xl flex flex-col gap-4`}
      >
        <h6 className="heroHeading">About Infotek</h6>
        <h2 className="text-4xl font-bold maxmd:text-5xl">
          We Are Increasing Business Success With{" "}
          <span className="text-[--themeColor]">Technology</span>
        </h2>
        <p className="my-2 w-[90%]">
          It is a long established fact that a reader will be distracted the
          readable content of a page when looking at layout the point.
        </p>
        <div className="bigCont flex max2xl:flex-col gap-8 pb-8 border-b border-solid border-b-slate-300">
          {infoContData.map((item, i) => (
            <IconInfo
              key={i}
              mainContClassName="lg:w-3/5 items-center"
              src={`/assets/images/icon-${i + 2}.svg`}
              heading={item}
              para="Aliquam erat volutpat Nullam imperdiet"
            />
          ))}
        </div>
        <CustomButton icon href="/about" className="mt-4">
          Explore More
        </CustomButton>
      </div>
    </section>
  );
}

function IconInfo({
  mainContClassName,
  imageContClassName,
  src,
  heading,
  para,
  children,
}) {
  return (
    <div className={`infoCont flex gap-7 ${mainContClassName}`}>
      <div
        className={`imgCont min-h-20 min-w-20 max-h-20 max-w-20 p-4 rounded-full bg-[--themeColor] ${imageContClassName}`}
      >
        <ImageComp src={src} height={500} width={500} alt="info icon" />
      </div>
      <div className="content">
        <h4 className="font-semibold text-xl">{heading}</h4>
        <p>{para}</p>
        {children}
      </div>
    </div>
  );
}

export default Section2;
