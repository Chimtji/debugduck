import React from "react";
import {Button, MantineProvider} from "@mantine/core"

const AppShellWithChildren:React.FC<any> = (props) => (
  <MantineProvider theme={props.theme} emotionCache={props.emotionCache}>
    <Button>With Children</Button>
  </MantineProvider>
)

export default AppShellWithChildren;