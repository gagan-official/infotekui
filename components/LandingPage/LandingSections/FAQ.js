import Accordion from "@/components/Accordion";
import ImageComp from "@/components/ImageComp";

const faqData = [
  {
    heading: "How Long Should A Business Plan Be?",
    para: "There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.",
  },
  {
    heading: "What Is Included In Your Services?",
    para: "There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.",
  },
  {
    heading: "What Type Of Company Is Measured?",
    para: "There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.",
  },
];

export default function FAQComp() {
  return (
    <section className="relative overflow-hidden">
      <ImageComp
        src="/assets/images/faq-shape.png"
        className="absolute -left-[8%] bottom-0 h-[90%] w-auto object-contain maxlg:hidden"
      />
      <ImageComp
        src="/assets/images/faq-bottom-shape.png"
        className="absolute left-0 bottom-0 h-1/2 w-auto object-contain maxlg:hidden"
      />
      <ImageComp
        src="/assets/images/faq-arrow-shape-1.png"
        className="bounceX absolute left-0 -top-[12%] h-1/2 w-auto object-contain maxlg:hidden"
      />
      <ImageComp
        src="/assets/images/circle-donut.png"
        className="animate-spin animDur absolute left-[37%] top-[20%] h-20 w-auto object-contain"
      />
      <ImageComp
        src="/assets/images/faq-right-shape.png"
        className="absolute right-0 top-0 h-full w-auto object-contain maxlg:object-cover"
      />
      <div className="innerCont max-w-7xl relative z-10 mx-auto flex gap-7 justify-evenly px-8 pt-4 maxlg:flex-col-reverse maxlg:gap-2">
        <ImageComp
          src="/assets/images/oldman-01.png"
          className="lg:w-[30%] maxlg:max-w-xs mt-12 maxlg:mx-auto"
        />
        <div className="rightCont flex flex-col gap-4 lg:max-w-lg lg:my-14 lg:ml-5">
          <span className="uppercase text-[--themeColor] font-medium">
            See our Faqs
          </span>
          <h2 className="text-4xl font-bold">
            Keep Your Business Safe & Ensure High Availability
          </h2>

          <Accordion data={faqData} />
        </div>
      </div>
    </section>
  );
}
