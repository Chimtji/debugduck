import React from "react";
import { Button, MantineProvider } from "@mantine/core";
import { rtlCache } from "./rtl-cache";
var AppShellWithChildren = function (props) { return (React.createElement("div", { dir: "rtl" },
    React.createElement(MantineProvider, { theme: props.theme, emotionCache: rtlCache },
        React.createElement(Button, null, "With Children")))); };
export default AppShellWithChildren;
//# sourceMappingURL=AppShellRtl.js.map