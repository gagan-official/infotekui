import Image from "next/image";

export default function ContinousCarousel({ carouselData, containerClassName, movingContClassName, imageUrl, textHover }) {
    // Making a multiple times replicated carouselData's elements array
    const multiData = (times) => Array(times).fill(carouselData).flat();
  
    return (
      <div
        className={`continousCarousel overflow-hidden p-7 text-5xl font-bold ${containerClassName ?? ""}`}
      >
        <div className={`movingCont flex justify-between items-center gap-7 whitespace-nowrap ${movingContClassName ?? ""}`}>
          {multiData(3).map((item) => (
            <>
              <span key={item} className={`carouselText ${textHover ? "transition-colors relative hover:text-[--themeColor] hoverText" : ""}`}>
                {item}
              </span>
              {imageUrl && (
                <Image
                  src={imageUrl}
                  width={100}
                  height={100}
                  alt="divider image"
                />
              )}
            </>
          ))}
        </div>
      </div>
    );
  }