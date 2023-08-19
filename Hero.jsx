import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Keerthana <span className='text-[#915EFF]'>Ch</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Computer Science and Engineering, B.Tech – 3rd Year<br className='sm:block hidden' />
          Email : N180137@rguktn.ac.in<br className='sm:block hidden' />
Phone : +91 7989685272<br className='sm:block hidden' />
College : Rajiv Gandhi University of Knowledge Technologies, Nuzvid

          </p>
        </div>
      </div>

      <ComputersCanvas />

      
    </section>
  );
};

export default Hero;
