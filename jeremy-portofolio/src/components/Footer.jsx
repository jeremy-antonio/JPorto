import styles from "../style";
import { footerimg } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} sm:pt-10 pt-6 flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        {/* <img src={logo} alt="hoobank" className="w-[266px] h-[72.14px] object-contain" /> */}
        <h2 className="font-mont text-xl font-bold">Want to Colaborate?</h2>
        <p className={`${styles.paragraph} mt-4`}>
          If you are interested in collaborating or have a project you would like to discuss together, Id be delighted to hear more. Please feel free to reach out to me through any of the following methods:
        </p>
        <div className="flex w-full flex-1 ">
          <img src="" alt="" />
          <p className="font">jerz.antonio10@gmail.com</p>
        </div>
      </div>

      <div className="flex-[1] flex flex-col justify-center items-center relative">
        <div className="rounded-full absolute bg-bg_misc w-[425px] h-[425px] right-[120px] z-[1]"></div>
        <img src={footerimg} alt="Me, Myself, and I" className="w-[50%] relative z-[99]" />
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
