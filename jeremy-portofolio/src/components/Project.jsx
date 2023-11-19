// import { feedback } from "../constants";
import styles from "../style";
// import FeedbackCard from "./FeedbackCard";

const Project = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-90" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-10 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>Featured Projects</h2>
    </div>
    <div className="w-full md:mt-0 mt-4 flex flex-wrap justify-start gap-x-10 gap-y-8">
      <div className="w-full sm:w-[48%] flex-none rounded-tl-[32px] bg-bg_secondary h-[400px]">
        <div className="pt-8 pl-10 flex flex-col">
          <span>Web Development</span>
          <a href="" className="">
            Rental Car Web
          </a>
          <img src={``} alt="" />
        </div>
      </div>
      <div className="w-full sm:w-[48%] flex-none ">test</div>
      <div className="w-full sm:w-[48%] flex-none ">test</div>
      <div className="w-full sm:w-[48%] flex-none ">test</div>
    </div>

    {/* <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div> */}
  </section>
);

export default Project;
