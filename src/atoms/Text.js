import { jsx as _jsx } from "react/jsx-runtime";
export const Text = ({ className, children, as }) => {
    const Component = as || 'div';
    return (_jsx(Component, { className: className, children: children }));
};
