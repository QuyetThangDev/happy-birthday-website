import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useRef } from "react";
import { Text } from "../atoms/Text";
import { TopDestinationTexts } from "../particles/DataLists";
import Slider from "react-slick";
import { Card } from "../molecules/Card";
import City1 from "../../assets/gallery1.jpeg";
import City2 from "../../assets/gallery2.jpeg";
import City3 from "../../assets/gallery3.jpeg";
import City4 from "../../assets/gallery4.jpeg";
import City5 from "../../assets/gallery5.jpeg";
import City6 from "../../assets/gallery6.jpeg";
import { Button } from "../atoms/Button";
import { AirplaneTilt, CaretLeft, CaretRight } from "@phosphor-icons/react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { ArrowFatDown } from "@phosphor-icons/react";
const TopDestination = () => {
    const sliderRef = useRef();
    // Function for next button
    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };
    // function for previous button
    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };
    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };
    const renderCities = useCallback((element) => {
        switch (element) {
            case 0:
                return City1;
            case 1:
                return City2;
            case 2:
                return City3;
            case 3:
                return City4;
            case 4:
                return City5;
            case 5:
                return City6;
            default:
                return "";
        }
    }, []);
    return (_jsxs("section", { className: "w-full h-auto flex flex-col items-center justify-center relative lg:px-24 md:px-20 px-6 my-20", children: [_jsx(Text, { as: "p", className: "font-light text-base text-color3/80 tracking-widest", children: TopDestinationTexts.firstText }), _jsx(Text, { as: "h2", className: "md:text-4xl text-2xl font-medium capitalize text-color3", children: TopDestinationTexts.secondText }), _jsxs("div", { className: "mt-12 w-full flex justify-end gap-5 items-center md:px-6 px-3", children: [_jsx(Button, { onClick: previous, className: "cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full", type: "button", children: _jsx(CaretLeft, { size: 18, color: "currentColor", weight: "fill" }) }), _jsx(Button, { onClick: next, className: "cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full", type: "button", children: _jsx(CaretRight, { size: 18, color: "currentColor", weight: "fill" }) })] }), _jsx("div", { className: "w-full h-auto mt-4", children: _jsx(Slider, { ref: (slider) => (sliderRef.current = slider), ...settings, children: TopDestinationTexts.cards.map((card, index) => (_jsx("div", { className: "md:px-6 px-3", children: _jsxs(Card, { cardClass: "overflow-hidden shadow-md rounded-lg cursor-pointer group", imageAlt: card.country, imageSrc: renderCities(index), imageWrapperClass: "w-full h-[250px] overflow-hidden", cover: "group-hover:scale-125 transition duration-500 ease", textWrapperClass: "flex flex-col gap-4 w-full px-5 py-5", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx(Text, { as: "h4", className: "text-base font-medium text-color3", children: card.country }), _jsx(Text, { as: "small", className: " text-color3 font-light text-sm", children: card.price })] }), _jsxs("div", { className: "w-full flex gap-4 items-center text-color3", children: [_jsx(AirplaneTilt, { size: 20, color: "currentColor", weight: "fill" }), _jsx(Text, { as: "p", className: " text-color3 font-light text-base", children: card.duration })] })] }) }, index))) }) }), _jsx(AnchorLink, { href: "#booking-steps", children: _jsx(motion.button, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, children: _jsxs(Text, { as: "span", className: "relative flex h-14 w-14", children: [_jsx(Text, { as: "span", className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-color1 opacity-75" }), _jsx(Text, { as: "span", className: "relative flex justify-center items-center text-white rounded-full h-14 w-14 bg-color1", children: _jsx(ArrowFatDown, { size: 20, color: "currentColor", weight: "fill" }) })] }) }) })] }));
};
export default TopDestination;
