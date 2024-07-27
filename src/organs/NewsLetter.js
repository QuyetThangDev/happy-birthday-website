import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Image } from "../atoms/Image";
import { Text } from "../atoms/Text";
import { SubscribeForm } from "../molecules/SubscribeForm";
import { NewsletterTexts } from "../particles/DataLists";
import groupOfPlus from "../../assets/plusGroup2.png";
const NewsLetter = () => {
    return (_jsxs("section", { className: "w-full my-32 flex justify-between relative items-start h-[400px]", children: [_jsx("div", { className: "bg-color3/10 w-[30%] h-[70%] self-end rounded-r-xl" }), _jsx("div", { className: "bg-color3/10 w-[30%] h-[70%] rounded-l-xl" }), _jsxs("div", { className: "w-full bg-color3/5 h-[100%] absolute flex flex-col items-center\r\n            justify-center md:gap-16 gap-10 px-5", children: [_jsx(Text, { as: "h1", className: "lg:text-3xl md:text-2xl text-xl text-center text-color3/70 lg:w-3/5 w-full", children: NewsletterTexts.firstText }), _jsx(SubscribeForm, {})] }), _jsx(Image, { image: groupOfPlus, alt: "Plus", className: "absolute -bottom-16 right-2 h-32" })] }));
};
export default NewsLetter;
