/** @jsx jsx */
import React, { useState } from "react";
import {
  jsx
} from "theme-ui";
import {
  Select,
  Box,
  Text,
} from "@theme-ui/components";
import { RenderCounter } from "./render-counter";

export function FirstDefaultContainer() {
  const [color, setColor] = useState("primary");
  function changeColor(event) {
    event.preventDefault();
    setColor(event.target.value);
  }
  const props = {
    color,
    changeColor,
  };
  return <FirstDefaultView {...props} />;
}

function FirstDefaultView({ color, changeColor }) {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
        <RenderCounter />
        <Select value={color} onChange={changeColor} style={{ borderRadius: 10, width: 300, margin: '20px 0px'}}>
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
        </Select>
      <Text sx={{ color, fontWeight: 'bold' }}>Hello, World</Text>
    </Box>
  );
}
