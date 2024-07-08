"use client";

import { useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";

export default function Accordion({ data }) {
  const [open, setOpen] = useState(0);

  const handleOpen = (i) => {
    setOpen(open === i ? null : i);
  };
  return (
    <div className="accordion flex flex-col gap-3">
      {data &&
        data.map((item, i) => {
          const currId = open === i;
          const [heading, para] = Object.keys(item);
          return (
            <div
              key={i}
              className={`expandBtn border border-slate-300 px-6 py-4 transition-colors ${
                currId ? "!border-none bg-[--lightShadeThemeColor]" : ""
              }`}
              onClick={() => handleOpen(i)}
            >
              <div
                className={`head text-lg font-medium flex justify-between items-center cursor-pointer ${
                  currId ? "text-[--themeColor] mb-4" : ""
                }`}
              >
                {item[heading]}{" "}
                <FaAnglesRight
                  className={`transition-transform ${
                    currId ? "rotate-90" : ""
                  }`}
                />
              </div>
              {currId && <p>{item[para]}</p>}
            </div>
          );
        })}
    </div>
  );
}
