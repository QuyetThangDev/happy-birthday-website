import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { List } from "../atoms/List";
import { Text } from "../atoms/Text";
import { BookingStepsTexts } from "../particles/DataLists";
import { AirplaneInFlight, AirplaneTilt, Buildings, MapTrifold, Receipt, Wallet, } from "@phosphor-icons/react";
import { Card } from "../molecules/Card";
import CardImage1 from "../../assets/bookingImage1.jpeg";
import CardImage2 from "../../assets/bookingImage2.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { ArrowFatDown } from "@phosphor-icons/react";
const BookingSteps = () => {
    const renderIcons = useCallback((element) => {
        switch (element) {
            case 0:
                return _jsx(MapTrifold, { size: 15, color: "currentColor", weight: "fill" });
            case 1:
                return _jsx(Wallet, { size: 15, color: "currentColor", weight: "fill" });
            case 2:
                return (_jsx(AirplaneInFlight, { size: 15, color: "currentColor", weight: "fill" }));
            default:
                return "";
        }
    }, []);
    return (_jsxs("section", { className: "w-full h-auto flex flex-col items-start justify-center relative lg:px-24 md:px-10 px-6 my-28 gap-5", children: [_jsx(Text, { as: "p", className: "font-light text-base text-color3/80 tracking-widest", children: BookingStepsTexts.firstText }), _jsxs("main", { className: "w-full grid md:grid-cols-2 lg:gap-6 gap-12 md:gap-5", children: [_jsxs("div", { className: "w-full flex flex-col gap-6 order-2 md:order-1", children: [_jsx(Text, { as: "h1", className: "lg:text-5xl md:text-3xl text-4xl text-color3 font-medium", children: BookingStepsTexts.secondText }), _jsx("ul", { className: "flex flex-col gap-8 lg:mt-5 mt-3", children: BookingStepsTexts.listOfSteps.map((step, index) => (_jsxs(List, { className: "flex gap-5 items-center justify-start", children: [_jsx(Text, { as: "p", className: `text-white ${index === 0
                                                ? "bg-color2"
                                                : index === 1
                                                    ? "bg-color1"
                                                    : "bg-color3"} p-2 rounded-md`, children: renderIcons(index) }), _jsx(Text, { as: "p", className: "text-sm text-color3 font-light", children: step.text })] }, index))) })] }), _jsxs("div", { className: "w-full flex flex-col justify-center lg:items-center items-start relative order-1 md:order-2", children: [_jsxs(Card, { cardClass: "lg:w-[70%] md:w-[80%] w-[90%] shadow-2xl shadow-sky-500/70 p-4 rounded-xl flex flex-col gap-4", imageAlt: BookingStepsTexts.cardOne.name, imageSrc: CardImage1, imageWrapperClass: "h-[150px] overflow-hidden rounded-xl shadow", cover: "object-cover object-top", textWrapperClass: "flex flex-col gap-3", children: [_jsx(Text, { as: "h4", className: "text-base font-medium text-color3", children: BookingStepsTexts.cardOne.name }), _jsx(Text, { as: "p", className: "text-sm font-light text-color3", children: BookingStepsTexts.cardOne.date }), _jsxs("div", { className: "flex items-center gap-6", children: [_jsx(Text, { as: "span", className: "text-color3 font-light bg-color3/5 p-2.5 rounded-full", children: _jsx(Receipt, { size: 18, color: "currentColor", weight: "light" }) }), _jsx(Text, { as: "span", className: "text-color3 font-light bg-color3/5 p-2.5 rounded-full", children: _jsx(MapTrifold, { size: 18, color: "currentColor", weight: "light" }) }), _jsx(Text, { as: "span", className: "text-color3 font-light bg-color3/5 p-2.5 rounded-full", children: _jsx(AirplaneTilt, { size: 18, color: "currentColor", weight: "light" }) })] }), _jsxs(Text, { as: "p", className: "text-sm font-light text-color3 flex items-center gap-3", children: [_jsx(Buildings, { size: 18, color: "currentColor", weight: "light" }), BookingStepsTexts.cardOne.people] })] }), _jsxs(Card, { cardClass: "flex gap-3 justify-start items-start absolute lg:right-0 -right-4 bottom-10 bg-white py-3 px-4 border-2 border-color3/5 shadow-md rounded-xl", imageAlt: BookingStepsTexts.cardTwo.destination, imageSrc: CardImage2, cover: "object-cover object-top", imageWrapperClass: "h-16 w-16 rounded-full overflow-hidden", textWrapperClass: "flex flex-col gap-2", children: [_jsx(Text, { as: "p", className: "text-xs font-light text-color3", children: BookingStepsTexts.cardTwo.status }), _jsx(Text, { as: "h4", className: "text-base font-medium text-color3", children: BookingStepsTexts.cardTwo.destination }), _jsx(Text, { as: "p", className: "text-xs font-light text-color3 pb-2 relative before:w-[40%] before:h-1 before:absolute before:bottom-0 before:left-0 before:bg-color1", children: BookingStepsTexts.cardTwo.completion })] })] })] }), _jsx(AnchorLink, { href: "#testimonials", children: _jsx(motion.button, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, children: _jsxs(Text, { as: "span", className: "relative flex h-14 w-14", children: [_jsx(Text, { as: "span", className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-color1 opacity-75" }), _jsx(Text, { as: "span", className: "relative flex justify-center items-center text-white rounded-full h-14 w-14 bg-color1", children: _jsx(ArrowFatDown, { size: 20, color: "currentColor", weight: "fill" }) })] }) }) })] }));
};
export default BookingSteps;
