import { jsx as _jsx } from "react/jsx-runtime";
export const Image = ({ className, image, alt, objectCover, as, ...rest }) => {
    const Component = as || 'div';
    return (_jsx(Component, { className: className, ...rest, children: _jsx("img", { src: image, alt: alt, className: `w-full h-full ${objectCover}` }) }));
};
