import Link from "next/link";
import {
  FaAngleRight,
  FaArrowUp,
  FaCalendarDays,
  FaRegCopyright,
} from "react-icons/fa6";
import ImageComp from "./ImageComp";
import { phoneMail, socialIcons } from "./NavData";
import { PhoneMailComp } from "./Header";
import CustomButton from "./CustomButton";
import { Fragment } from "react";

const footerData = [
  {
    heading: "Quick Links",
    children: [
      { title: "Infotech About", href: "/about" },
      { title: "Our Services", href: "/service" },
      { title: "Our Blogs", href: "/news" },
      { title: "FAQ'S", href: "/faq" },
      { title: "Contact Us", href: "/contact" },
    ],
  },
  {
    heading: "Recent Posts",
    children: [
      {
        title: "Top 5 Most Famous Technology Trend In 2024",
        date: "20 Feb, 2024",
        src: "pp1.jpg",
      },
      {
        title: "The Surfing Man Will Blow Your Mind",
        date: "15 Dec, 2024",
        src: "pp2.jpg",
      },
    ],
  },
  {
    heading: "Contact Us",
    children: [...phoneMail, { id: 4, custbutton: true }],
  },
];

function PostPreview({ item }) {
  return (
    <div className="postCont flex gap-4">
      <ImageComp src={`/assets/images/${item.src}`} className="h-20 w-auto" />
      <div className="postRight flex flex-col gap-2">
        <span className="flex gap-2 items-center text-sm text-[--offWhite]">
          <FaCalendarDays /> {item.date}
        </span>
        <Link
          href="/news-details"
          className="font-semibold transition-colors hover:text-[--themeStaticColor]"
        >
          {item.title}
        </Link>
      </div>
    </div>
  );
}

export default function Footer() {
  const marginY = "my-4";
  return (
    <footer>
      <div className="topCont p-20 bg-[--fontColor] relative">
        {/* Bg Images */}
        <ImageComp
          src="/assets/images/footer-shape-1.png"
          className="absolute left-0 bottom-0 h-3/4 w-auto"
        />
        <ImageComp
          src="/assets/images/footer-shape-2.png"
          className="absolute right-0 bottom-0 h-full w-auto"
        />
        {/* Bg Images */}
        <div className="innerCont mx-auto flex flex-wrap justify-evenly max-w-7xl">
          {/* Main Content */}
          <div
            className={`logoCont max-w-64 flex flex-col gap-8 z-10 maxlg:text-center maxlg:items-center ${marginY}`}
          >
            <ImageComp
              src="/assets/images/white-logo.svg"
              className="h-10 w-fit"
            />
            <p className="text-[--offWhite]">
              Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a
              lacinia curabitur lacinia mollis
            </p>
            <div className="socialIconsCont flex gap-4">
              {socialIcons.map((item, i) => (
                <Link
                  key={i}
                  title={item.title}
                  href={`https://${item.title.toLowerCase()}.com`}
                  target="_blank"
                  className="h-9 w-9 border border-slate-700 text-white flex justify-center items-center"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Rest Lists */}
          {footerData.map((element, index) => (
            <div
              key={index}
              className={`footerContent text-white flex flex-col gap-6 max-w-64 z-10 ${marginY}`}
            >
              <h3 className=" text-2xl font-bold border-b pb-4">
                {element.heading}
              </h3>
              {element.children.map((item, i) => {
                return (
                  <Fragment key={i}>
                    {/* ########## Recent Posts Component ########## */}
                    {item.date && <PostPreview item={item} />}

                    {/* ########## Contact Us Component ########## */}
                    {item.id &&
                      (item.custbutton ? (
                        <CustomButton
                          href="/contact"
                          icon
                          className="transition-colors before:!bg-[--bgColor] after:!bg-[--bgColor] hover:!text-[--fontColor]"
                        >
                          Get A Quote
                        </CustomButton>
                      ) : (
                        <PhoneMailComp item={item} />
                      ))}

                    {/* ########## Quick Links Component ########## */}
                    {item.href && (
                      <Link
                        href={item.href ?? "/"}
                        className="flex gap-2 items-center transition-all text-[--offWhite] hover:text-[--themeStaticColor] hover:translate-x-1"
                      >
                        <FaAngleRight /> {item.title}
                      </Link>
                    )}
                  </Fragment>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="relative bottom flex flex-wrap justify-around gap-4 py-5 bg-[--themeColor] text-white">
        <Link
          href="#"
          className="absolute bg-[--themeColor] p-5 rounded-full -top-11 left-1/2 -translate-x-1/2 border-4 border-white"
        >
          <FaArrowUp />
        </Link>
        <span className="flex gap-2 items-center px-4">
          <FaRegCopyright /> All Copyright 2024 by Infotech
        </span>
        <div className="right flex gap-6 px-4">
          <Link href="/contact" className="hoverUnderline">
            Terms & Condition
          </Link>
          <Link href="/contact" className="hoverUnderline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
