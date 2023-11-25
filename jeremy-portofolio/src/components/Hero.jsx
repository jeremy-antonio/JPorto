import styles from "../style";
import { profile, github, telegram, youtube, linkedin, discord } from "../assets";
// import profile from "../assets/profil-jeremy.png";
// import github from "../assets/github.png";
// import telegram from "../assets/telegram.png";
// import youtube from "../assets/youtube.png";
// import linkedin from "../assets/linkedin.png";
// import discord from "../assets/discord.png";
// import GetStarted from "./getstarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col sm:pb-16 pt-4 pb-6`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-0 px-0`}>
      {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For <span className="text-white">1 Month</span> Account
        </p>
      </div> */}

      {/* Name */}
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-mont font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          {/* <br className="sm:block hidden" />*/} <span className="text-gradient">Jeremy Antonio</span>
        </h1>
      </div>
      <div className="w-[50%] h-1 bg-gold my-3"></div>

      {/* Paragraph */}
      <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
        Im a recent graduate majoring in Information Technology from Lambung Mangkurat University. I am passionate about Web Development and currently seeking career opportunities in this field. Throughout my academic journey, I have
        consistently demonstrated my commitment to expanding my knowledge and skills in web development.
      </p>

      {/* Social Media */}
      <div className="flex flex-row w-full gap-x-[16px] mt-6">
        <img src={linkedin} alt="LinkedIn" className="w-[55px]" />
        <img src={github} alt="Github" className="w-[55px]" />
        <img src={discord} alt="Discord" className="w-[55px]" />
        <img src={youtube} alt="Youtube" className="w-[55px]" />
        <img src={telegram} alt="Telegram" className="w-[55px]" />
      </div>
    </div>

    {/* Hero Image */}
    <div className={`md:my-0 my-10 relative items-center overflow-hidden`}>
      <img src={profile} alt="Profile Picture" className="w-[100%] h-[100%] relative z-[10] pl-10" />
      <div className="rounded-full bg-bg_hero w-[90%] h-[100%] top-[50px] right-[15px]  sm:top-[190px] sm:right-[60px] absolute z-1"></div>
    </div>

    <div></div>
  </section>
);

export default Hero;
