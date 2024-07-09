import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

function CustomButton({ children, icon, className, ...restProps }) {
  return (
    <ButtonLink
      {...restProps}
      className={`custBtn z-[1] min-w-48 w-fit p-5 relative flex items-center justify-center gap-2 bg-[--themeColor] text-white font-semibold ${
        className ?? ""
      }`}
    >
      {children} {icon && <FaArrowRightLong />}
    </ButtonLink>
  );
}

function ButtonLink(props) {
  if (props.href?.length !== undefined) {
    return <Link {...props}>{props.children}</Link>;
  } else {
    return <button {...props}>{props.children}</button>;
  }
}

export function RippleButton({
  children,
  style,
  className,
  initialShadowColor,
  animatedShadowColor,
  ...props
}) {
  return (
    <ButtonLink
      style={{
        "--initialShadowColor": initialShadowColor ?? "rgba(56, 75, 255, 0.2)",
        "--animatedShadowColor": animatedShadowColor ?? "rgba(244, 68, 56, 0)",
        ...style,
      }}
      className={`ripple relative rounded-full p-4 bg-[--themeColor] outline outline-1 outline-[--themeColor] outline-offset-4 text-white ${className}`}
      {...props}
    >
      {children}
    </ButtonLink>
  );
}

export default CustomButton;
