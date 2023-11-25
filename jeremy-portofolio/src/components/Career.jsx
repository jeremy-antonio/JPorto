import styles from "../style";
import { fe } from "../assets";

const Career = () => (
  <section className={`${styles.flexStart} flex-col `}>
    <div className="flex flex-col mb-14">
      <h2 className={styles.heading2}>My Expertise</h2>
    </div>
    <div className="flex flex-wrap justify-around w-full gap-16 sm:gap-x-10">
      <div className="flex-[1]  bg-bg_misc  rounded-lg flex flex-col items-center px-7">
        <img src={fe} alt="" className="w-[75px] mt-[-35px]" />
        <div className="font-mont text-2xl font-semibold mt-5">Front-End Development</div>
        <div className="font-ibm text-lg mt-5 pb-5">
          Proficient in crafting responsive and user-friendly interfaces using the latest web technologies, including HTML5, CSS3, and JavaScript. Experienced in leveraging modern CSS frameworks, such as Tailwind CSS and Bootstrap 5. Adept
          at utilizing JavaScript libraries and frameworks, with a strong focus on React
        </div>
      </div>
      <div className="flex-[1]  bg-bg_misc  rounded-lg flex flex-col items-center px-7">
        <img src={fe} alt="" className="w-[75px] mt-[-35px]" />
        <div className="font-mont text-2xl font-semibold mt-5">Back-End Development</div>
        <div className="font-ibm text-lg mt-5 pb-5">
          I am actively expanding my knowledge in Node.js and enhancing my skills in building server-side applications using the Express.js framework. In addition to coding, I am proficient in utilizing tools like Postman for API
          development and testing, ensuring the seamless integration of RESTful APIs
        </div>
      </div>
      <div className="flex-[1]  bg-bg_misc rounded-lg flex flex-col items-center px-7">
        <img src={fe} alt="" className="w-[75px] mt-[-35px]" />
        <div className="font-mont text-2xl font-semibold mt-5">Project Management</div>
        <div className="font-ibm text-lg mt-5 pb-5">
          Well-versed in Agile methodologies with a particular focus on Scrum, I bring a strategic approach to project management that ensures the successful delivery of projects. My proficiency extends to effective project planning, where
          I leverage Agile principles to foster collaboration, adaptability, and continuous improvement.
        </div>
      </div>
    </div>
  </section>
);

export default Career;
