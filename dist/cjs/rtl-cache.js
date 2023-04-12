"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rtlCache = void 0;
var tslib_1 = require("tslib");
var stylis_plugin_rtl_1 = tslib_1.__importDefault(require("stylis-plugin-rtl"));
var core_1 = require("@mantine/core");
exports.rtlCache = (0, core_1.createEmotionCache)({
    key: 'mantine-rtl',
    stylisPlugins: [stylis_plugin_rtl_1.default],
});
//# sourceMappingURL=rtl-cache.js.map