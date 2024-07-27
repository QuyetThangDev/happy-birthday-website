import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Alert = ({ type, text }) => {
    return (_jsx("div", { className: 'absolute top-10 left-0 right-0 flex justify-center items-center', children: _jsxs("div", { className: `p-2 ${type === "danger" ? "bg-red-800" : "bg-blue-800"} items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`, role: 'alert', children: [_jsx("p", { className: `flex rounded-full ${type === "danger" ? "bg-red-500" : "bg-blue-500"} uppercase px-2 py-1 text-xs font-semibold mr-3`, children: type === "danger" ? "Failed" : "Success" }), _jsx("p", { className: 'mr-2 text-left', children: text })] }) }));
};
export default Alert;
