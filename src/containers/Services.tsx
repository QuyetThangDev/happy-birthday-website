import { Image } from "../atoms/Image";
import { Text } from "../atoms/Text";
import React from "react";
import { ServiceTexts } from "../particles/DataLists";
import { Card } from "../molecules/Card";
import { useCallback } from "react";
import { Fade } from "react-awesome-reveal";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { ArrowFatDown } from "@phosphor-icons/react";
import giftbox from "../assets/icons/giftbox.png";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label"

const Services = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full h-auto px-6 lg:px-24 md:px-20">
      <main className="flex flex-col items-center justify-center w-full gap-3 pt-32">
        <Text as="p" className="text-base font-light tracking-widest text-color3/80">
          <Fade>{ServiceTexts.firstText}</Fade>
        </Text>
        <Text as="h2" className="text-2xl font-medium md:text-xl text-color3">
          <Fade>{ServiceTexts.secondText}</Fade>
        </Text>
        <div className="z-20 grid w-full h-auto px-8 my-12 lg:grid-cols-4 md:grid-cols-2 lg:gap-7 md:gap-10 gap-7 md:px-0">
          {ServiceTexts.cards.map((card: any, index: any) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div>
                  <Card
                    cardClass="w-full bg-white flex flex-col items-center justify-center py-6 cursor-pointer transition duration-300 hover:shadow-xl hover:shadow-orange-100 hover:scale-110 px-5 rounded-xl cardPseudo after:bg-color1"
                    imageWrapperClass="w-28 h-28 relative z-10 before:content-[''] before:absolute before:top-3 before:right-3 before:w-16 before:h-16 before:bg-color2/30 before:-z-10 before:rounded-tl-3xl before:rounded-br-3xl"
                    cover="object-cover"
                    imageAlt={card.firstText}
                    imageSrc={giftbox}
                    textWrapperClass="w-full flex flex-col items-center gap-2"
                  >
                    <Text as="h4" className="text-base font-medium rounded text-color1">
                      {card.firstText}
                    </Text>
                  </Card>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle>{card.firstText}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="flex flex-col items-center gap-4">
                    <Label htmlFor="name" className="w-full font-sans font-normal leading-5 text-justify text-gray-600">
                      {card.secondText}
                    </Label>
                    <Label htmlFor="name" className="w-full font-sans font-normal leading-5 text-justify text-gray-600">
                      {card.thirdText}
                    </Label>
                  </div>
                  {/* <div className="flex items-center gap-4">
                    <Label htmlFor="username" className="text-left">
                      {card.secondText}
                    </Label>
                  </div> */}
                </div>
                <DialogFooter className="sm:justify-end">
                  <DialogClose asChild>
                    <Button type="button">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        <div className="flex items-center justify-center w-full gap-0 md:justify-center lg:gap-12 md:gap-6">
          <div className="flex items-center justify-center gap-3 text-center cursor-pointer lg:gap-6">
            <AnchorLink href="#top-destination">
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
          </div>
        </div>
      </main>
    </section>
  );
};

export default Services;
