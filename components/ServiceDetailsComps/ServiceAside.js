import { FaArrowRightLong, FaPhone, FaRegClock } from "react-icons/fa6";
import { RippleButton } from "../CustomButton";
import Link from "next/link";

export default function ServiceAside() {
  const iconClass =
    "transition-colors group-hover:text-[--bgColor] text-[--themeColor]";
  return (
    <aside className="serviceAsideCont flex flex-col gap-8">
      {widgetData.map((item, index) => {
        const service = item.heading === "All Services";
        return (
          <div key={index} className="widget bg-[--lightShadeThemeColor] p-8">
            <h3 className="font-medium text-xl pb-4 mb-4 relative before:absolute before:left-0 before:bottom-0 before:w-1/4 before:border-2 before:border-b-[--themeColor]">
              {item.heading}
            </h3>
            <ul className="widgetList flex flex-col gap-2">
              {item.list.map((list, i) => (
                <li
                  key={i}
                  className={`bg-[--bgColor] flex items-center p-6 gap-3 ${service ? "justify-between transition-colors hover:bg-[--themeColor] hover:text-[--bgColor] group" : "flex-row-reverse justify-end"}`}
                >
                  {service ? <Link href="/service-details">{list}</Link> : list}
                  {service ? (
                    <FaArrowRightLong className={iconClass} />
                  ) : (
                    <FaRegClock className={iconClass} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
      <div
        style={{
          "--bgImage": "url(/assets/images/service-details-post.jpg)",
          "--bgGradient": "linear-gradient(180deg, #3c72fc, rgba(0, 6, 12, 0))",
        }}
        className="w-96 h-[26rem] p-8 flex flex-col justify-center items-center gap-4 text-[--bgColor] mainBreadcrumCont"
      >
        <RippleButton
          initialShadowColor="hsla(0,0%,100%,.8)"
          animatedShadowColor="rgba(244,68,56,0)"
          className="!bg-[--bgColor] !outline-[--bgColor] !text-[--themeColor]"
          href="tel:+208-555-0112"
        >
          <FaPhone />
        </RippleButton>
        <h4 className="font-semibold capitalize text-xl">
          Need help? call here
        </h4>
        <span className="font-medium text-lg">+208-555-0112</span>
      </div>
    </aside>
  );
}

const widgetData = [
  {
    heading: "All Services",
    list: [
      "Database Security",
      "IT Consultancy",
      "App Development",
      "UI/UX Design",
      "Cyber Security",
    ],
  },
  {
    heading: "Opening Hours",
    list: [
      "Mon - Sat: 10.00 AM - 4.00 PM",
      "Sun: 09.00 AM - 4.00 PM",
      "Friday: Closed",
      "Emergency: 24 hours",
    ],
  },
];
