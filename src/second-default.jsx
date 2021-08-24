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
};

const selectStyle = {
  borderRadius: 10,
  width: 300,
  margin: "20px 0px",
};

export function SecondDefault() {
  return (
    <Box style={boxStyle}>
      <RenderCounter />
      <ColorPicker />
      <Text>Hello, world!</Text>
    </Box>
  );
}

function ColorPicker() {
  const [color, setColor] = useState("primary");
  function changeColor(event) {
    event.preventDefault();
    setColor(event.target.value);
  }
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
