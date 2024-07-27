import { Image } from "../atoms/Image";
import bgImage from "../assets/HeroVector.png";
import heroImage from "../assets/hero-img.png";
import { Text } from "../atoms/Text";
import { HeroTexts } from "../particles/DataLists";
// import { Button } from "../atoms/Button";
import { Play, ArrowFatDown } from "@phosphor-icons/react";
import { Fade, Slide } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import gif from "../assets/hi.gif";

const HeroSection = () => {
  return (
    <section className="w-full lg:h-screen md:h-[550px] h-[830px] relative overflow-x-hidden flex justify-end">
      <Image
        className="h-[60%] w-[80%] lg:h-[90vh] md:h-[50vh] lg:w-1/2 md:w-[55%]"
        image={bgImage}
        alt="Hero Background Vector"
      />
      <main className="absolute top-0 left-0 grid w-full h-auto px-5 pt-24 lg:h-full md:grid-cols-2 lg:px-24 md:px-8 md:pt-32 lg:pt-0">
        <div className="flex flex-col justify-center order-2 gap-3 md:gap-6 md:order-1">
          <Text
            as="p"
            className="text-sm font-normal tracking-widest uppercase text-color1 lg:text-base"
          >
            <Fade>{HeroTexts.firstText}</Fade>
          </Text>
          <Text
            as="h1"
            className="font-sans text-3xl font-medium text-gray-700 lg:text-4xl md:text-5xl"
          >
            <Fade>{HeroTexts.secondText}</Fade>
          </Text>
          <Text
            as="p"
            className="font-sans text-sm font-light text-justify text-color3 md:text-xl"
          >
            <Fade>{HeroTexts.thirdText}</Fade>
          </Text>
          <div className="flex items-center justify-between w-full gap-0 md:justify-start lg:gap-12 md:gap-6">
            {/* <Button
              type="button"
              className="px-5 py-3 text-white border-none rounded-lg outline-none lg:px-7 bg-color2 font-extralight"
            >
              {HeroTexts.firstButton}
            </Button> */}
            <div className="flex items-center gap-3 cursor-pointer lg:gap-6">
              <NavLink to="/gift">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Text as="span" className="relative flex h-14 w-14">
                    <Text
                      as="span"
                      className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-color1"
                    ></Text>
                    <Text
                      as="span"
                      className="relative flex items-center justify-center text-white rounded-full h-14 w-14 bg-color1"
                    >
                      <Play size={20} color="currentColor" weight="fill" />
                    </Text>
                  </Text>
                </motion.button>
              </NavLink>
              <AnchorLink href="#services">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Text as="span" className="relative flex h-14 w-14">
                    <Text
                      as="span"
                      className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-color1"
                    >
                    </Text>
                    <Text
                      as="span"
                      className="relative flex items-center justify-center text-white rounded-full h-14 w-14 bg-color1"
                    >
                      <ArrowFatDown
                        size={20}
                        color="currentColor"
                        weight="fill"
                      />
                    </Text>
                  </Text>
                </motion.button>
              </AnchorLink>
              <span className="text-color1">{HeroTexts.secondButton}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center order-1 md:order-2">
          <Slide direction="right">
            <Image
              image={gif}
              alt="Hero Image"
              className="lg:h-[85%] lg:w-[90%] md:h-[100%] md:w-full w-[90%] h-[20vh]"
            />
          </Slide>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
