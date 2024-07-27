import { useCallback, useRef } from "react";
import React from 'react';

import { Text } from "../atoms/Text";
import { TopDestinationTexts } from "../particles/DataLists";
// import Slider from "react-slick";
import { Card } from "../molecules/Card";
// import City1 from "../assets/gallery1.jpeg";
// import City2 from "../assets/gallery2.jpeg";
// import City3 from "../assets/gallery3.jpeg";
// import City4 from "../assets/gallery4.jpeg";
// import City5 from "../assets/gallery5.jpeg";
// import City6 from "../assets/gallery6.jpeg";
import { Button } from "../atoms/Button";
import { AirplaneTilt, CaretLeft, CaretRight } from "@phosphor-icons/react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { ArrowFatDown } from "@phosphor-icons/react";

const TopDestination = () => {
  // const sliderRef = useRef<Slider | null>();

  // Function for next button
  // const next = () => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickNext();
  //   }
  // };
  // function for previous button
  // const previous = () => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickPrev();
  //   }
  // };

  // Slider settings
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 2,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         dots: false,
  //       },
  //     },
  //   ],
  // };

  // const renderCities = useCallback((element: number) => {
  //   switch (element) {
  //     case 0:
  //       return City1;
  //     case 1:
  //       return City2;
  //     case 2:
  //       return City3;
  //     case 3:
  //       return City4;
  //     case 4:
  //       return City5;
  //     case 5:
  //       return City6;
  //     default:
  //       return "";
  //   }
  // }, []);

  // return (
  //   <section className="relative flex flex-col items-center justify-center w-full h-auto px-6 my-20 lg:px-24 md:px-20">
  //     <Text
  //       as="p"
  //       className="text-base font-light tracking-widest text-color3/80"
  //     >
  //       {TopDestinationTexts.firstText}
  //     </Text>
  //     <Text
  //       as="h2"
  //       className="text-2xl font-medium capitalize md:text-4xl text-color3"
  //     >
  //       {TopDestinationTexts.secondText}
  //     </Text>

  //     {/* Controllers  */}
  //     <div className="flex items-center justify-end w-full gap-5 px-3 mt-12 md:px-6">
  //       <Button
  //         onClick={previous}
  //         className="p-2 border-none rounded-full outline-none cursor-pointer bg-color2/30 text-color3 hover:bg-color2"
  //         type="button"
  //       >
  //         <CaretLeft size={18} color="currentColor" weight="fill" />
  //       </Button>
  //       <Button
  //         onClick={next}
  //         className="p-2 border-none rounded-full outline-none cursor-pointer bg-color2/30 text-color3 hover:bg-color2"
  //         type="button"
  //       >
  //         <CaretRight size={18} color="currentColor" weight="fill" />
  //       </Button>
  //     </div>

  //     {/* Slides  */}
  //     <div className="w-full h-auto mt-4">
  //       <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
  //         {TopDestinationTexts.cards.map((card, index) => (
  //           <div key={index} className="px-3 md:px-6">
  //             <Card
  //               cardClass="overflow-hidden shadow-md rounded-lg cursor-pointer group"
  //               imageAlt={card.country}
  //               // imageSrc={renderCities(index)}
  //               imageWrapperClass="w-full h-[250px] overflow-hidden"
  //               cover="group-hover:scale-125 transition duration-500 ease"
  //               textWrapperClass="flex flex-col gap-4 w-full px-5 py-5"
  //             >
  //               <div className="flex items-center justify-between">
  //                 <Text as="h4" className="text-base font-medium text-color3">
  //                   {card.country}
  //                 </Text>
  //                 <Text as="small" className="text-sm font-light text-color3">
  //                   {card.price}
  //                 </Text>
  //               </div>
  //               <div className="flex items-center w-full gap-4 text-color3">
  //                 <AirplaneTilt size={20} color="currentColor" weight="fill" />
  //                 <Text as="p" className="text-base font-light text-color3">
  //                   {card.duration}
  //                 </Text>
  //               </div>
  //             </Card>
  //           </div>
  //         ))}
  //       </Slider>
  //     </div>
  //     <AnchorLink href="#booking-steps">
  //       <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
  //         <Text as="span" className="relative flex h-14 w-14">
  //           <Text
  //             as="span"
  //             className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-color1"
  //           ></Text>
  //           <Text
  //             as="span"
  //             className="relative flex items-center justify-center text-white rounded-full h-14 w-14 bg-color1"
  //           >
  //             <ArrowFatDown size={20} color="currentColor" weight="fill" />
  //           </Text>
  //         </Text>
  //       </motion.button>
  //     </AnchorLink>
  //   </section>
  // );
};

export default TopDestination;
