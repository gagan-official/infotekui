import ContinousCarousel from "../ContinousCarousel";
import Achievement from "@/components/LandingPage/LandingSections/Achievement";
import Section1 from "./LandingSections/Section1";
import Section2 from "./LandingSections/Section2";
import Section5 from "./LandingSections/Section5";

function LandingPage() {
  return (
    <main>
      <Section1 />
      <Section2 />
      {/* <ContinousCarousel
        carouselData={section5CarouselData}
        containerClassName="text-6xl"
        movingContClassName="!gap-12"
        imageUrl="https://infoteknextjs.vercel.app/assets/img/asterisk.svg"
        textHover
      /> */}
      <Section5 />
      <Achievement
        Heading={
          <>
            We Are Increasing <br /> Business Success
          </>
        }
        ShortHead={"Achievement"}
      />
    </main>
  );
}

const section5CarouselData = [
  "Cyber Security",
  "IT Solution",
  "Techology",
  "Data Security",
];

export default LandingPage;
