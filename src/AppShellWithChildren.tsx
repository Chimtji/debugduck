import React from "react";
import {Button, MantineProvider} from "@mantine/core"


const AppShellWithChildren:React.FC<any> = () => (
  <MantineProvider>
    <Button>With Children</Button>
  </MantineProvider>
)

export default AppShellWithChildren;