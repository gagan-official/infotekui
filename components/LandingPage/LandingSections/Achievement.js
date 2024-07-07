import ImageComp from "@/components/ImageComp";

function Achievement({ ShortHead, Heading }) {
  return (
    <div className="bg-[--themeColor2]  py-20  ">
      <div
        className="max-w-[960px]  w-full flex justify-between gap-14 flex-col text-white mr-auto ml-auto"
        style={{
          paddingLeft: "calc(var(--bs-gutter-x) * 1)",
          paddingRight: "calc(var(--bs-gutter-x) * 1)",
        }}
      >
        <div className=" relative w-fit flex flex-col">
          <span className="font-medium uppercase mb-3 animate-fadeInUp">{ShortHead}</span>
          <h2 className="text-4xl font-bold animate-fadeInUp">{Heading}</h2>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-16 ">
          {AchievementData && AchievementData.map((item) => {
            return (
              <div key={item.id} className={`flex gap-3 flex-col ${item.src ?"animate-fadeInUp" : ''}`}>
                <ImageComp
                  src={item.src}
                  alt={item.info}
                  height={60}
                  width={60}
                />
                <div className="mt-5">
                  <span className="text-4xl font-bold">{item.value}+</span>
                  <p className="text-white mt-2">{item.info}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const AchievementData = [
  {
    id: 1,
    src: "/assets/images/01.svg",
    value: 6561,
    info: "Satisfied Clients",
  },
  {
    id: 2,
    src: "/assets/images/02.svg",
    value: 600,
    info: "Finished Projects",
  },
  {
    id: 3,
    src: "/assets/images/03.svg",
    value: 250,
    info: "Skilled Experts",
  },
  {
    id: 4,
    src: "/assets/images/04.svg",
    value: 590,
    info: "Media Posts",
  },
];
export default Achievement;
