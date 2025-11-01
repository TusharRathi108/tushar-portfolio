import CountUp from "react-countup";

// specifying the stats.
const myStats = [
  {
    num: 4,
    text: "Projects completed",
  },
  {
    num: 2,
    text: "Years of experience",
  },
  {
    num: 4,
    text: "Technologies mastered",
  },
  // {
  //   num: 500,
  //   text: "Code commits",
  // },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto mb-4">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none ">
          {myStats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                {" "}
                <div className="flex items-center">
                  <CountUp
                    end={item.num}
                    duration={15}
                    className="text-4xl xl:text-6xl font-extra-bold"
                  />
                  {item.text === "Years of experience" ? (
                    <span className="text-4xl xl:text-6xl">+</span>
                  ) : null}
                </div>
                <p
                  className={`${
                    item.text?.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  }`}
                >
                  {" "}
                  {item.text}{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
