import styles from "../style";
import Button from "./Button";

const Career = () => (
  <section className={`${styles.flexCenter} ${styles.padding} sm:flex-row flex-col rounded-[20px] box-shadow bg-bg_misc `}>
    <div className="flex-1 flex flex-col ">
      <h2 className={styles.heading2}>Lets try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payment</p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default Career;
