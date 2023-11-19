// import { stats } from "../constants";
// import Button from "./Button";
import { react, javascript, node, express, tailwind } from "../assets";
import styles from "../style";

const Skill = () => (
  <section className={`${styles.flexCenter} ${styles.padding} flex-row flex-wrap sm:mb-20 mb-6 box-shadow bg-bg_misc z-50 mt-[-63px] gap-10`}>
    <div className="flex-[1] flex  items-center justify-center bg-bg_primary h-[75px] gap-5">
      <img src={react} alt="React" className="h-[40px]" />
      <span className="font-mont font-bold text-4xl text-[#61DAFB]">React</span>
    </div>
    <div className="flex-[1] flex  items-center justify-center bg-bg_primary h-[75px] gap-3">
      <img src={javascript} alt="Javascript" className="h-[40px]" />
      <span className="font-mont font-bold text-2xl text-[#F0DB4F]">Javascript</span>
    </div>
    <div className="flex-[1] flex  items-center justify-center bg-bg_primary h-[75px] gap-5">
      <img src={node} alt="NodeJS" className="h-[40px]" />
      <span className="font-mont font-bold text-2xl">NodeJS</span>
    </div>
    <div className="flex-[1] flex  items-center justify-center bg-bg_primary h-[75px] gap-5">
      <img src={express} alt="Express" className="h-[50px]" />
      <span className="font-mont font-bold text-2xl">ExpressJS</span>
    </div>
    <div className="flex-[1] flex  items-center justify-center bg-bg_primary h-[75px] gap-2">
      <img src={tailwind} alt="Tailwind" className="h-[30px]" />
      <span className="font-mont font-bold text-xl text-[#38BDF8]">TailwindCSS</span>
    </div>

    {/* {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        <h4 className="font-mont font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white ">
          {stat.value}
        </h4>
        <p className="font-mont font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))} */}
  </section>
);

export default Skill;
