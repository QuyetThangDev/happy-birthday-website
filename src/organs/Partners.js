import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Slider from "react-slick";
import partners1 from "../../assets/partners1.png";
import partners2 from "../../assets/partners2.png";
import partners3 from "../../assets/partners3.png";
import { Card } from "../molecules/Card";
const Partners = () => {
    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };
    return (_jsx("section", { className: "w-full lg:px-20 px-6 my-16 lg:my-0", children: _jsxs(Slider, { ...settings, children: [_jsx(Card, { cardClass: "p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center", imageAlt: "partenrsLogo", imageSrc: partners1, imageWrapperClass: "w-[120px] h-[50px]", cover: "object-contain" }), _jsx(Card, { cardClass: "p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center", imageAlt: "partenrsLogo", imageSrc: partners2, imageWrapperClass: "w-[120px] h-[50px]", cover: "object-contain" }), _jsx(Card, { cardClass: "p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center", imageAlt: "partenrsLogo", imageSrc: partners3, imageWrapperClass: "w-[120px] h-[50px]", cover: "object-contain" }), _jsx(Card, { cardClass: "p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center", imageAlt: "partenrsLogo", imageSrc: partners1, imageWrapperClass: "w-[120px] h-[50px]", cover: "object-contain" }), _jsx(Card, { cardClass: "p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center", imageAlt: "partenrsLogo", imageSrc: partners2, imageWrapperClass: "w-[120px] h-[50px]", cover: "object-contain" }), _jsx(Card, { cardClass: "p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center", imageAlt: "partenrsLogo", imageSrc: partners3, imageWrapperClass: "w-[120px] h-[50px]", cover: "object-contain" }), _jsx(Card, { cardClass: "p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center", imageAlt: "partenrsLogo", imageSrc: partners1, imageWrapperClass: "w-[120px] h-[50px]", cover: "object-contain" }), _jsx(Card, { cardClass: "p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center", imageAlt: "partenrsLogo", imageSrc: partners2, imageWrapperClass: "w-[120px] h-[50px]", cover: "object-contain" }), _jsx(Card, { cardClass: "p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center", imageAlt: "partenrsLogo", imageSrc: partners3, imageWrapperClass: "w-[120px] h-[50px]", cover: "object-contain" })] }) }));
};
export default Partners;
