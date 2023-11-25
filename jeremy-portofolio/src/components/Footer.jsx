import styles from "../style";
import { footerimg, gmail, github, linkedin } from "../assets";
// import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} sm:py-10 py-6 flex-col `}>
    <div className={`flex justify-center items-center md:flex-row flex-col w-full sm:items-end`}>
      <div className="flex-[1] flex flex-col justify-start mr-10 ">
        {/* <img src={logo} alt="hoobank" className="w-[266px] h-[72.14px] object-contain" /> */}
        <h2 className="font-mont text-xl font-bold">Want to Colaborate?</h2>
        <p className={`${styles.paragraph} mt-4`}>
          If you are interested in collaborating or have a project you would like to discuss together, Id be delighted to hear more. Please feel free to reach out to me through any of the following methods:
        </p>
        <div className="flex w-full flex-1 items-center gap-x-[16px] mt-4">
          <img src={gmail} alt="Gmail" className="w-[55px]" />
          <a href="mailto:jerz.antonio10@gmail.com" target="_blank" rel="noopener noreferrer" className="font-mont text-gold font-semibold">
            jerz.antonio10@gmail.com
          </a>
        </div>
        <div className="flex w-full flex-1 items-center gap-x-[16px] mt-4">
          <img src={linkedin} alt="LinkedIn" className="w-[55px]" />
          <a href="https://www.linkedin.com/in/jeremy-ant/" target="_blank" rel="noopener noreferrer" className="font-mont text-gold font-semibold">
            Jeremy Antonio
          </a>
        </div>
        <div className="flex w-full flex-1 items-center gap-x-[16px] mt-4">
          <img src={github} alt="GitHub" className="w-[55px]" />
          <a href="https://github.com/jeremy-antonio" target="_blank" rel="noopener noreferrer" className="font-mont text-gold font-semibold">
            jeremy-antonio
          </a>
        </div>
      </div>

      <div className="flex-[1] flex flex-col justify-center items-center mt-4 sm:mt-[-200px] ">
        <div className="bg-bg_misc rounded-full w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] flex items-center justify-center overflow-hidden mt-2">
          <img src={footerimg} alt="Me, Myself, and I" className="w-[75%] pt-5" />
        </div>
      </div>
      {/* <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-mont font-medium text-[18px] leading-[27px] text-white">{footerlink.title}</h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li key={link.name} className={`font-mont font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"}`}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </div>

    {/* <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">Copyright Ⓒ 2023 Jeremy Antonio</p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img key={social.id} src={social.icon} alt={social.id} className={`w-[35px] h-[35px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`} onClick={() => window.open(social.link)} />
        ))}
      </div>
    </div> */}
  </section>
);

export default Footer;
