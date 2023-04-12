import React from "react";
import {MantineProvider} from "@mantine/core"

const AppShell = ({children}) => {
  <MantineProvider>
    {children}
  </MantineProvider>
}

export default AppShell;