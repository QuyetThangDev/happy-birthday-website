import { jsx as _jsx } from "react/jsx-runtime";
export const Button = ({ className, children, ...rest }) => {
    return (_jsx("button", { ...rest, className: className, children: children }));
};
