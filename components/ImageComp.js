import Image from "next/image";

export default function ImageComp({ height, width, objectFit, alt, ...restProps }) {
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
