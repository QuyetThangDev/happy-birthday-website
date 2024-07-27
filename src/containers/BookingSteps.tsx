import { useCallback } from "react";
import { List } from "../atoms/List";
import { Text } from "../atoms/Text";
import { BookingStepsTexts } from "../particles/DataLists";
import {
  AirplaneInFlight,
  AirplaneTilt,
  Buildings,
  MapTrifold,
  Receipt,
  Wallet,
} from "@phosphor-icons/react";
import { Card } from "../molecules/Card";
// import CardImage1 from "../../assets/bookingImage1.jpeg";
// import CardImage2 from "../../assets/bookingImage2.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { ArrowFatDown } from "@phosphor-icons/react";
import React from "react";

const BookingSteps = () => {
  const renderIcons = useCallback((element: number) => {
    switch (element) {
      case 0:
        return <MapTrifold size={15} color="currentColor" weight="fill" />;
      case 1:
        return <Wallet size={15} color="currentColor" weight="fill" />;
      case 2:
        return (
          <AirplaneInFlight size={15} color="currentColor" weight="fill" />
        );
      default:
        return "";
    }
  }, []);

  return (
    <section className="relative flex flex-col items-start justify-center w-full h-auto gap-5 px-6 lg:px-24 md:px-10 my-28">
      <Text
        as="p"
        className="text-base font-light tracking-widest text-color3/80"
      >
        {BookingStepsTexts.firstText}
      </Text>
      <main className="grid w-full gap-12 md:grid-cols-2 lg:gap-6 md:gap-5">
        {/* Text and Steps Container  */}
        <div className="flex flex-col order-2 w-full gap-6 md:order-1">
          <Text
            as="h1"
            className="text-4xl font-medium lg:text-5xl md:text-3xl text-color3"
          >
            {BookingStepsTexts.secondText}
          </Text>
          <ul className="flex flex-col gap-8 mt-3 lg:mt-5">
            {BookingStepsTexts.listOfSteps.map((step, index) => (
              <List
                className="flex items-center justify-start gap-5"
                key={index}
              >
                <Text
                  as="p"
                  className={`text-white ${index === 0
                      ? "bg-color2"
                      : index === 1
                        ? "bg-color1"
                        : "bg-color3"
                    } p-2 rounded-md`}
                >
                  {renderIcons(index)}
                </Text>
                <Text as="p" className="text-sm font-light text-color3">
                  {step.text}
                </Text>
              </List>
            ))}
          </ul>
        </div>
        {/* Card Container  */}
        <div className="relative flex flex-col items-start justify-center order-1 w-full lg:items-center md:order-2">
          {/* First Card  */}
          {/* <Card
            cardClass="lg:w-[70%] md:w-[80%] w-[90%] shadow-2xl shadow-sky-500/70 p-4 rounded-xl flex flex-col gap-4"
            imageAlt={BookingStepsTexts.cardOne.name}
            imageSrc={CardImage1}
            imageWrapperClass="h-[150px] overflow-hidden rounded-xl shadow"
            cover="object-cover object-top"
            textWrapperClass="flex flex-col gap-3"
          >
            <Text as="h4" className="text-base font-medium text-color3">
              {BookingStepsTexts.cardOne.name}
            </Text>
            <Text as="p" className="text-sm font-light text-color3">
              {BookingStepsTexts.cardOne.date}
            </Text>
            <div className="flex items-center gap-6">
              <Text
                as="span"
                className="text-color3 font-light bg-color3/5 p-2.5 rounded-full"
              >
                <Receipt size={18} color="currentColor" weight="light" />
              </Text>
              <Text
                as="span"
                className="text-color3 font-light bg-color3/5 p-2.5 rounded-full"
              >
                <MapTrifold size={18} color="currentColor" weight="light" />
              </Text>

              <Text
                as="span"
                className="text-color3 font-light bg-color3/5 p-2.5 rounded-full"
              >
                <AirplaneTilt size={18} color="currentColor" weight="light" />
              </Text>
            </div>
            <Text
              as="p"
              className="flex items-center gap-3 text-sm font-light text-color3"
            >
              <Buildings size={18} color="currentColor" weight="light" />
              {BookingStepsTexts.cardOne.people}
            </Text>
          </Card> */}

          {/* Second Absolute Card  */}
          {/* <Card
            cardClass="flex gap-3 justify-start items-start absolute lg:right-0 -right-4 bottom-10 bg-white py-3 px-4 border-2 border-color3/5 shadow-md rounded-xl"
            imageAlt={BookingStepsTexts.cardTwo.destination}
            imageSrc={CardImage2}
            cover="object-cover object-top"
            imageWrapperClass="h-16 w-16 rounded-full overflow-hidden"
            textWrapperClass="flex flex-col gap-2"
          >
            <Text as="p" className="text-xs font-light text-color3">
              {BookingStepsTexts.cardTwo.status}
            </Text>
            <Text as="h4" className="text-base font-medium text-color3">
              {BookingStepsTexts.cardTwo.destination}
            </Text>
            <Text
              as="p"
              className="text-xs font-light text-color3 pb-2 relative before:w-[40%] before:h-1 before:absolute before:bottom-0 before:left-0 before:bg-color1"
            >
              {BookingStepsTexts.cardTwo.completion}
            </Text>
          </Card> */}
        </div>
      </main>
      <AnchorLink href="#testimonials">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Text as="span" className="relative flex h-14 w-14">
            <Text
              as="span"
              className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-color1"
            ></Text>
            <Text
              as="span"
              className="relative flex items-center justify-center text-white rounded-full h-14 w-14 bg-color1"
            >
              <ArrowFatDown size={20} color="currentColor" weight="fill" />
            </Text>
          </Text>
        </motion.button>
      </AnchorLink>
    </section>
  );
};

export default BookingSteps;
