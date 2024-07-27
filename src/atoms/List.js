import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
export const List = ({ className, children, ...rest }) => {
    return (_jsx(_Fragment, { children: _jsx("li", { className: className, ...rest, children: children }) }));
};
