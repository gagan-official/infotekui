"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleRight } from "react-icons/fa6";

export default function BreadcrumDetector() {
  const pathname = usePathname();

  const listClassName = "font-semibold flex gap-2 items-center capitalize";

  // Slicing pahtname if it starts with "/"
  const slicedPathname = pathname.startsWith("/")
    ? pathname.slice(1)
    : pathname;

  // Making Breadcrum of slicedPathname
  const breadcrum = slicedPathname
    .split("/")
    .map((item) => item.replaceAll("-", " "));

  return (
    <ul className="breadcrum flex gap-2">
      <li className={listClassName}><Link href="/" className="transition-colors hover:text-[--themeColor]">Home</Link></li>
      {breadcrum.map((breadslice, i) => (
        <li key={i} className={listClassName}>
          <FaAngleRight /> {breadslice}
        </li>
      ))}
    </ul>
  );
}
