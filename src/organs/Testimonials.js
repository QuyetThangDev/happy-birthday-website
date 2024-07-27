import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useRef } from "react";
import { Text } from "../atoms/Text";
import { TestimonialTexts } from "../particles/DataLists";
import Slider from "react-slick";
import { Button } from "../atoms/Button";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { Card } from "../molecules/Card";
import ProfileImg1 from "../../assets/profile1.jpeg";
import ProfileImg2 from "../../assets/profile2.jpeg";
import ProfileImg3 from "../../assets/profile3.jpeg";
import ProfileImg4 from "../../assets/profile4.jpeg";
const Testimonials = () => {
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
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
    };
    const renderProfileImg = useCallback((element) => {
        switch (element) {
            case 0:
                return ProfileImg2;
            case 1:
                return ProfileImg1;
            case 2:
                return ProfileImg3;
            case 3:
                return ProfileImg4;
            default:
                return "";
        }
    }, []);
    return (_jsx("section", { className: "w-full h-auto flex flex-col items-start justify-center relative lg:px-24 md:px-10 px-6 mt-36 gap-5", children: _jsxs("main", { className: 'w-full grid md:grid-cols-2 lg:gap-0 gap-8 md:gap-5', children: [_jsxs("div", { className: 'w-full flex flex-col gap-6', children: [_jsx(Text, { as: "p", className: "font-light text-base text-color3/80 tracking-widest", children: TestimonialTexts.firstText }), _jsx(Text, { as: "h1", className: "lg:text-5xl md:text-3xl text-4xl text-color3 font-medium", children: TestimonialTexts.secondText })] }), _jsxs("div", { className: "w-full lg:h-[400px] flex justify-center gap-4 items-center", children: [_jsx("div", { className: "lg:h-[250px] w-[90%]", children: _jsx(Slider, { ref: (slider) => (sliderRef.current = slider), ...settings, children: TestimonialTexts.feedBacks.map((feedBack, index) => (_jsx("div", { className: "w-full", children: _jsxs(Card, { cardClass: "bg-white shadow border-[1px] border-color3/10 relative rounded-xl p-4 lg:h-[200px] h-[260px] lg:mb-4 w-full flex gap-4 justify-start", imageAlt: feedBack.person, imageSrc: renderProfileImg(index), imageWrapperClass: "w-20 h-20 rounded-full absolute lg:bottom-4 bottom-3 right-4 overflow-hidden", cover: "object-cover object-top", textWrapperClass: "flex flex-col justify-center gap-6", children: [_jsx(Text, { as: "q", className: "text-[0.84rem] font-light text-color3", children: feedBack.text }), _jsxs("div", { className: "flex flex-col gap-2", children: [_jsx(Text, { as: "h4", className: "text-base text-color3 font-medium", children: feedBack.person }), _jsx(Text, { as: "p", className: "text-sm text-color3 font-light", children: feedBack.location })] })] }, index) }))) }) }), _jsxs("div", { className: "flex flex-col gap-4 pb-5", children: [_jsx(Button, { onClick: previous, id: "prev", className: "cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full", type: "button", children: _jsx(CaretUp, { size: 18, color: "currentColor", weight: "fill" }) }), _jsx(Button, { onClick: next, id: "next", className: "cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full", type: "button", children: _jsx(CaretDown, { size: 18, color: "currentColor", weight: "fill" }) })] })] })] }) }));
};
export default Testimonials;
