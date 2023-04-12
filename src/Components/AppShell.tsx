import React from "react";
import {MantineProvider} from "@mantine/core"

const AppShell:React.FC<any> = ({children}) => (
  <MantineProvider>
    {children}
  </MantineProvider>
)


export default AppShell;