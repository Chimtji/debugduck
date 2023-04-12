"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var core_1 = require("@mantine/core");
var rtl_cache_1 = require("./rtl-cache");
var AppShellWithChildren = function (props) { return (react_1.default.createElement("div", { dir: "rtl" },
    react_1.default.createElement(core_1.MantineProvider, { theme: props.theme, emotionCache: rtl_cache_1.rtlCache },
        react_1.default.createElement(core_1.Button, null, "With Children")))); };
exports.default = AppShellWithChildren;
//# sourceMappingURL=AppShellRtl.js.map