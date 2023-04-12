import React from "react";
import {MantineProvider} from "@mantine/core"

const AppShell:React.FC<any> = (props) => (
  <MantineProvider theme={props.theme} emotionCache={props.emotionCache}>
    {props.children}
  </MantineProvider>
)


export default AppShell;