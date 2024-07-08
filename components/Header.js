import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import navElements, { phoneMail, socialIcons, urlCatcher } from "./NavData";

function Header() {
  return (
    <>
      <HeaderTop />
      <header className="sticky top-0 flex flex-col z-50 bg-[--bgColor]">
        <nav className="flex py-4 px-8 items-center justify-between shadow-md">
          <a
            className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0"
            href="#"
            rel="noopener noreferrer"
          >
            <Image
              src="https://infoteknextjs.vercel.app/assets/img/logo/black-logo.svg"
              alt="infotek logo"
              //className="dark:invert"
              width={170}
              height={24}
              priority
            />
          </a>
          <ul className="flex font-semibold gap-6 w-3/5 max-w-3xl justify-between items-center maxlg:w-fit">
            {/* #### Nav Menus #### */}
            {navElements.map((item, index) => (
              <li
                key={index}
                className="navItems relative transition-colors hover:text-[--themeColor] maxlg:hidden"
              >
                <Link href={item.url} className="flex gap-1 items-center py-4">
                  {item.title} {item.children && <FaChevronDown />}
                </Link>
                {/* **** Nav Menus' Children **** */}
                {item.children && <SubMenu itemChildren={item.children} />}
              </li>
            ))}
            <li>
              <IoSearchOutline className="text-xl" /> {/* Search Icon */}
            </li>
            <li>
              <LuMenu className="text-2xl text-[--themeColor]" />{" "}
              {/* Hamburger Icon */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

// ########## Sub Menu Container Component ##########
function SubMenu({ itemChildren, topValue, leftValue }) {
  return (
    <ul
      style={{
        "--topValue": topValue ?? "100%",
        "--leftValue": leftValue ?? 0,
      }}
      className="subMenu flex flex-col justify-between min-w-44 xl:min-w-52 maxlg:min-w-36 maxlg:text-sm"
    >
      {itemChildren.map((nestItem, i) => (
        <li
          key={i}
          className="subList relative border-b border-b-slate-200 last-of-type:border-none"
        >
          {nestItem.url ? (
            <Link
              href={nestItem.url}
              className="px-5 py-3 text-[--fontColor] flex items-center gap-1 transition-colors hover:bg-[--themeColor] hover:text-white"
            >
              {nestItem.title} {nestItem.children && <FaChevronDown />}
            </Link>
          ) : (
            <>
              {nestItem.title} {nestItem.children && <FaChevronDown />}
            </>
          )}
          {nestItem.children && (
            <SubMenu
              itemChildren={nestItem.children}
              topValue="0px"
              leftValue="100%"
            />
          )}
        </li>
      ))}
    </ul>
  );
}

export function PhoneMailComp({ item }) {
  return (
    <Link
      href={item.type ? urlCatcher(item?.type, item?.text) : "/"}
      className="flex gap-3 items-center"
    >
      {item?.icon ?? ""} <span className="text-[--offWhite] text-sm">{item?.text ?? ""}</span>
    </Link>
  );
}

// ########## Email, Phone and Social Icons' Top Header ##########
function HeaderTop() {
  return (
    <div className="topHead bg-[--fontColor] text-white flex justify-between py-3 px-12 maxlg:hidden">
      <div className="left flex gap-6">
        {phoneMail.map(
          (item) =>
            item.type !== "address" && (
              <PhoneMailComp key={item.id} item={item} />
            )
        )}
      </div>
      <div className="right flex gap-3 items-center font-medium">
        Follow Us:{" "}
        {socialIcons.map((item) => (
          <Link
            key={item.id}
            title={item.title}
            href={`https://${item.title.toLowerCase()}.com`}
            target="_blank"
          >
            {item.icon}{" "}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
