import React from "react";
import {MantineProvider} from "@mantine/core"

type TProps = {
  children: React.ReactNode;
}

const AppShell:React.FC<TProps> = ({children}) => (
  <MantineProvider>
    {children}
  </MantineProvider>
)


export default AppShell;