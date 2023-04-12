import React from "react";
import {Button, MantineProvider} from "@mantine/core"

const AppShellWithChildren = () => {
  <MantineProvider>
    <Button>With Children</Button>
  </MantineProvider>
}

export default AppShellWithChildren;