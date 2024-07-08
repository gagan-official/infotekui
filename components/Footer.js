import Link from "next/link";
import { FaArrowUp, FaRegCopyright } from "react-icons/fa6";
import ImageComp from "./ImageComp";
import { socialIcons } from "./NavData";

export default function Footer() {
  return (
    <footer>
      <div className="top p-24 bg-[--fontColor] flex justify-evenly relative">
        <ImageComp
        src="/assets/images/footer-shape-1.png"
        className="absolute left-0 bottom-0 h-3/4 w-auto"
        />
        <ImageComp
        src="/assets/images/footer-shape-2.png"
        className="absolute right-0 bottom-0 h-full w-auto"
        />
        <div className="logoCont max-w-xs flex flex-col gap-8">
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
        <div className="footerContent">
          <h3 className="text-white text-2xl font-bold border-b pb-4">
            Contact Us
          </h3>
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
