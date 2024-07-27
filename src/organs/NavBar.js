import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Image } from "../atoms/Image";
// import { Button } from "../atoms/Button";
import Logo from "../../assets/birthdaylogo.png";
// import { NavButtons, NavLinks } from "../particles/DataLists";
// import { List } from "../atoms/List";
// import { useNavigate } from "react-router-dom";
// import { ArrowCircleRight, CirclesFour } from "@phosphor-icons/react";
import { Slide } from "react-awesome-reveal";
const NavBar = () => {
    //   const navigate = useNavigate();
    //   const [open, setOpen] = useState(false);
    // const [scrollY, setScrollY] = useState(0)
    const [navBarColor, setNavBarColor] = useState(false);
    //   const handleToggle = () => {
    //     setOpen(!open);
    //   };
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNavBarColor(true) : setNavBarColor(false);
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (_jsx("header", { className: "w-full h-auto bg-transparent overflow-x-hidden fixed z-50 top-0 left-0", children: _jsx(Slide, { direction: "down", children: _jsx("nav", { className: `w-full md:h-24 h-20 ${navBarColor ? "bg-white" : "bg-transparent"} lg:px-24 md:px-12 px-8 flex justify-between items-center`, children: _jsx(Image, { as: "a", href: "/", className: "md:h-24 h-32 h-20", image: Logo, alt: "Logo" }) }) }) }));
};
export default NavBar;
