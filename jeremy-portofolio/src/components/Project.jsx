// import { feedback } from "../constants";
import { carrental, placeholder, savorwich, sia } from "../assets";
import styles from "../style";
// import FeedbackCard from "./FeedbackCard";

const Project = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-90" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-10 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>Featured Projects</h2>
    </div>
    <div className="w-full md:mt-0 mt-4 flex flex-wrap justify-between  gap-y-10">
      <div className=" basis-full sm:basis-[48%] rounded-tl-[32px] rounded-br-[32px] bg-bg_secondary h-auto pt-8 pl-10 flex flex-col">
        <span className="font-mont font-bold text-lg text-gold mb-4">Web Development</span>
        <a href="#" className="font-mont text-white font-bold text-2xl mb-8">
          Rental Car Web
        </a>
        <img src={carrental} alt="" className="h-[400px] rounded-br-[32px]" />
      </div>
      <div className=" basis-full sm:basis-[48%] rounded-tl-[32px] rounded-br-[32px] bg-bg_secondary h-auto pt-8 pl-10 flex flex-col">
        <span className="font-mont font-bold text-lg text-gold mb-4">Web Development</span>
        <a href="#" className="font-mont text-white font-bold text-2xl mb-8">
          TBD
        </a>
        <img src={placeholder} alt="" className="h-[400px] rounded-br-[32px]" />
      </div>
      <div className=" basis-full sm:basis-[48%] rounded-tl-[32px] rounded-br-[32px] bg-bg_secondary h-auto pt-8 pl-10 flex flex-col">
        <span className="font-mont font-bold text-lg text-gold mb-4">Web Development</span>
        <a href="#" className="font-mont text-white font-bold text-2xl mb-8">
          Academic Information System Prototype
        </a>
        <img src={sia} alt="" className="h-[400px] rounded-br-[32px]" />
      </div>
      <div className=" basis-full sm:basis-[48%] rounded-tl-[32px] rounded-br-[32px] bg-bg_secondary h-auto pt-8 pl-10 flex flex-col">
        <span className="font-mont font-bold text-lg text-gold mb-4">Web Development</span>
        <a href="#" className="font-mont text-white font-bold text-2xl mb-8">
          Dicoding Challenge (Savorwich)
        </a>
        <img src={savorwich} alt="" className="h-[400px] rounded-br-[32px]" />
      </div>
    </div>

    {/* <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div> */}
  </section>
);

export default Project;
