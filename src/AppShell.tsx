import React from "react";
import {MantineProvider} from "@mantine/core"

const AppShell:React.FC<any> = (props) => (
  <MantineProvider>
    {props.children}
  </MantineProvider>
)


export default AppShell;