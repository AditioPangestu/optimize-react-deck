/** @jsx jsx */
import React, { useState } from "react";
import {
  jsx
} from "theme-ui";
import {
  Select,
  Box,
} from "@theme-ui/components";
import { RenderCounter } from "./render-counter";

export function SecondDefaultContainer() {
  const [color, setColor] = useState("primary");
  function changeColor(event) {
    event.preventDefault();
    setColor(event.target.value);
  }
  const props = {
    color,
    changeColor,
  };
  return <SecondDefaultView {...props} />;
}

function SecondDefaultView({ color, changeColor }) {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: 10,
      }}
      sx={{
        p: 4,
        border: '4px solid',
        borderColor: color
      }}
    >
        <RenderCounter />
        <Select value={color} onChange={changeColor} style={{ borderRadius: 10, width: 300, margin: '20px 0px'}}>
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
        </Select>
    </Box>
  );
}
