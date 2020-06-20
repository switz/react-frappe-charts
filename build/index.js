"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const frappe_charts_min_esm_1 = require("frappe-charts/dist/frappe-charts.min.esm");
function ReactFrappeChart(props) {
    const ref = react_1.default.useRef(null);
    const chart = react_1.default.useRef(null);
    const { onDataSelect } = props;
    react_1.default.useEffect(() => {
        chart.current = new frappe_charts_min_esm_1.Chart(ref.current, Object.assign({ isNavigable: onDataSelect !== undefined }, props));
        if (onDataSelect) {
            chart.current.parent.addEventListener("data-select", (e) => {
                e.preventDefault();
                onDataSelect(e);
            });
        }
    }, []);
    react_1.default.useEffect(() => {
        chart.current.update(props.data);
    }, [props.data]);
    return react_1.default.createElement("div", { ref: ref });
}
exports.default = ReactFrappeChart;
