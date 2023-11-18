// import { features } from "../constants";
import { educations } from "../constants";
import styles, { layout } from "../style";
// import Button from "./Button";

const FeatureCard = ({ icon, title, subtitle, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] w-full ${index !== educations.length - 1} ? "mb-6" : "mb-0" feature-card`}>
    <div className={`w-[128px] h-[128px] rounded-md ${styles.flexCenter} bg-bg_misc`}>
      <img src={icon} alt="icon" className="w-[75%] h-[75%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-5 pt-2">
      <h4 className="font-mont font-bold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
      <p className="font-mont font-normal text-white text-[16px] leading-[24px] mb-10">{subtitle}</p>
      <p className="font-mont font-semibold text-[16px] text-gold leading-[24px] mb-1">{content}</p>
    </div>
  </div>
);

const Education = () => (
  <section id="features" className={`flex md:flex-row flex-col sm:pb-16 pb-6`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Education</h2>
      <p className={`${styles.paragraph} max-w-[650px] mt-5`}>
        During my time in college, I actively participated in various web development training programs and workshops, honing my skills in front-end and back-end development. My dedication to my studies and passion for web development
        enabled me to graduate on time completing my program in 3 years and 8 months with a excellent academic achievement, achieving a 3.52 GPA.
        <br />
        <br />I am now eager to leverage my skills and knowledge in a professional setting and contribute to the dynamic field of web development. I am committed to staying updated with the latest web development technologies and trends and
        am excited about the endless possibilities that web development offers. I am confident that my skills, enthusiasm, and dedication make me a valuable asset to any web development team.
      </p>

      {/* <Button styles={`mt-10 rounded-lg`} /> */}
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {educations.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Education;
