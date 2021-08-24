/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "theme-ui";
import { Select, Box, Text } from "@theme-ui/components";
import { RenderCounter } from "./render-counter";

const boxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  borderRadius: 10,
  padding: "20px",
};

const selectStyle = {
  borderRadius: 10,
  width: 300,
  margin: "20px 0px",
};

export function App() {
  return (
    <ColorLayout>
      <RenderCounter />
    </ColorLayout>
  );
}

function ColorLayout({ children }) {
  const [color, setColor] = useState("primary");
  function changeColor(event) {
    event.preventDefault();
    setColor(event.target.value);
  }
  return (
    <Box
      style={boxStyle}
      sx={{ border: "4px solid", borderColor: color }}
    >
      {children}
      <ColorPicker
        color={color}
        changeColor={changeColor}
      />
      <Text sx={{ color }}>Hello, world!</Text>
    </Box>
  );
}

function ColorPicker({ color, changeColor }) {
  return (
    <>
      <Select
        value={color}
        onChange={changeColor}
        style={selectStyle}
      >
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
      </Select>
      <Box
        sx={{ bg: color }}
        style={{ width: 300, height: 30, borderRadius: 10 }}
      />
    </>
  );
}
