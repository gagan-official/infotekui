import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

function CustomButton({ children, icon, className, ...restProps }) {
  return (
    <ButtonLink
      {...restProps}
      className={`custBtn z-[1] min-w-48 w-fit p-5 relative flex items-center justify-center gap-2 bg-[--themeColor] text-white font-semibold ${className ?? ""}`}
    >
      {children} {icon && <FaArrowRightLong />}
    </ButtonLink>
  );
}

function ButtonLink(props) {
    if(props.href?.length !== undefined) {
        return <Link {...props}>{props.children}</Link>
    } else {
        return <button {...props}>{props.children}</button>
    }
}

export default CustomButton;
