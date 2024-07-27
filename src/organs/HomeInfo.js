import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";
const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1)
        return (_jsxs("h1", { className: "sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5", children: ["Hi, I'm", _jsx("span", { className: "font-semibold mx-2 text-white", children: "Adrian" }), "\uD83D\uDC4B", _jsx("br", {}), "A Software Engineer from Croatia \uD83C\uDDED\uD83C\uDDF7"] }));
    if (currentStage === 2) {
        return (_jsxs("div", { className: "info-box", children: [_jsxs("p", { className: "font-medium sm:text-xl text-center", children: ["Worked with many companies ", _jsx("br", {}), " and picked up many skills along the way"] }), _jsxs(Link, { to: "/about", className: "neo-brutalism-white neo-btn", children: ["Learn more", _jsx("img", { src: arrow, alt: "arrow", className: "w-4 h-4 object-contain" })] })] }));
    }
    if (currentStage === 3) {
        return (_jsxs("div", { className: "info-box", children: [_jsxs("p", { className: "font-medium text-center sm:text-xl", children: ["Led multiple projects to success over the years. ", _jsx("br", {}), " Curious about the impact?"] }), _jsxs(Link, { to: "/projects", className: "neo-brutalism-white neo-btn", children: ["Visit my portfolio", _jsx("img", { src: arrow, alt: "arrow", className: "w-4 h-4 object-contain" })] })] }));
    }
    if (currentStage === 4) {
        return (_jsxs("div", { className: "info-box", children: [_jsxs("p", { className: "font-medium sm:text-xl text-center", children: ["Need a project done or looking for a dev? ", _jsx("br", {}), " I'm just a few keystrokes away"] }), _jsxs(Link, { to: "/contact", className: "neo-brutalism-white neo-btn", children: ["Let's talk", _jsx("img", { src: arrow, alt: "arrow", className: "w-4 h-4 object-contain" })] })] }));
    }
    return null;
};
export default HomeInfo;
