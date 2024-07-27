import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Input = ({ containerClass, inputClass, children, ...rest }) => {
    return (_jsxs("div", { className: containerClass, children: [_jsx("input", { className: inputClass, ...rest }), children] }));
};
