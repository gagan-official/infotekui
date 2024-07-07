import Image from "next/image";

export default function ImageComp(props) {
  let { height, width, objectFit, alt, ...restProps } = props;
  return (
    <Image
      height={height ?? 1000}
      width={width ?? 1000}
      objectFit={objectFit ?? "cover"}
      alt={alt ?? "bg image"}
      draggable={false}
      {...restProps}
    />
  );
}
