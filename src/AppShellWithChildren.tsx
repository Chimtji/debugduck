import React from "react";
import {Button, MantineProvider} from "@mantine/core"

const AppShellWithChildren:React.FC<{}> = () => (
  <MantineProvider>
    <Button>With Children</Button>
  </MantineProvider>
)

export default AppShellWithChildren;