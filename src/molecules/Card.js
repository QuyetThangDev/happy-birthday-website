import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Image } from "../atoms/Image";
export const Card = ({ cardClass, imageWrapperClass, imageAlt, imageSrc, textWrapperClass, children, cover, ...rest }) => {
    return (_jsxs("div", { className: cardClass, ...rest, children: [_jsx(Image, { className: imageWrapperClass, objectCover: cover, alt: imageAlt, image: imageSrc }), _jsx("div", { className: textWrapperClass, children: children })] }));
};
