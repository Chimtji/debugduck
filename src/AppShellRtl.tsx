import React from "react";
import {Button, MantineProvider} from "@mantine/core"
import { rtlCache } from "./rtl-cache";


const AppShellWithChildren:React.FC<any> = (props) => (
  <div dir="rtl">
    <MantineProvider theme={props.theme} emotionCache={rtlCache}>
      <Button>With Children</Button>
    </MantineProvider>
  </div>
)

export default AppShellWithChildren;