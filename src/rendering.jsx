/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "theme-ui";
import { Button, Box, Text } from "@theme-ui/components";
import { RenderCounter } from "./render-counter";

const boxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  borderRadius: 10,
  margin: "5px",
  padding: "5px",
};

const buttonStyle = {
  fontSize: 20, cursor: 'pointer',
  backgroundColor: "black",
  marginTop: 5,
};

const boxSX = {
  border: "2px solid",
  borderColor: "primary",
};

const textSX = {
  fontSize: 4,
  fontWeight: "bold",
  color: "secondary",
  marginBottom: 5,
};

export function ComponentA() {
  const [counter, setCounter] = useState(0);
  return (
    <Box style={boxStyle} sx={boxSX}>
      <Text sx={textSX}>Component A</Text>
      <RenderCounter />
      <Button
        style={buttonStyle}
        onClick={() =>
          setCounter((oldcounter) => oldcounter + 1)
        }
      >
        Counter: {counter}
      </Button>
      <ComponentB />
    </Box>
  );
}

export function SlowComponentA() {
  const [counter, setCounter] = useState(0);
  return (
    <Box style={boxStyle} sx={boxSX}>
      <Text sx={textSX}>Component A</Text>
      <RenderCounter />
      <Button
        style={buttonStyle}
        onClick={() =>
          setCounter((oldcounter) => oldcounter + 1)
        }
      >
        Counter: {counter}
      </Button>
      <SlowComponentB />
    </Box>
  );
}

export function MemoizedSlowComponentA() {
  const [counter, setCounter] = useState(0);
  return (
    <Box style={boxStyle} sx={boxSX}>
      <Text sx={textSX}>Component A</Text>
      <RenderCounter />
      <Button
        style={buttonStyle}
        onClick={() =>
          setCounter((oldcounter) => oldcounter + 1)
        }
      >
        Counter: {counter}
      </Button>
      <MemoizedSlowComponentB />
    </Box>
  );
}

function ComponentB() {
  const [counter, setCounter] = useState(0);
  return (
    <Box style={boxStyle} sx={boxSX}>
      <Text sx={textSX}>Component B</Text>
      <RenderCounter />
      <Button
        style={buttonStyle}
        onClick={() =>
          setCounter((oldcounter) => oldcounter + 1)
        }
      >
        Counter: {counter}
      </Button>
      <Box style={{ ...boxStyle, flexDirection: "row" }}>
        <ComponentC />
        <ComponentD />
      </Box>
    </Box>
  );
}

function SlowComponentB() {
  const [counter, setCounter] = useState(0);
  return (
    <Box style={boxStyle} sx={boxSX}>
      <Text sx={textSX}>Component B</Text>
      <RenderCounter />
      <Button
        style={buttonStyle}
        onClick={() =>
          setCounter((oldcounter) => oldcounter + 1)
        }
      >
        Counter: {counter}
      </Button>
      <Box style={{ ...boxStyle, flexDirection: "row" }}>
        <SlowComponentC />
        <ComponentD />
      </Box>
    </Box>
  );
}

function MemoizedSlowComponentB() {
  const [counter, setCounter] = useState(0);
  return (
    <Box style={boxStyle} sx={boxSX}>
      <Text sx={textSX}>Component B</Text>
      <RenderCounter />
      <Button
        style={buttonStyle}
        onClick={() =>
          setCounter((oldcounter) => oldcounter + 1)
        }
      >
        Counter: {counter}
      </Button>
      <Box style={{ ...boxStyle, flexDirection: "row" }}>
        <MemoizedSlowComponentC />
        <ComponentD />
      </Box>
    </Box>
  );
}

function ComponentC() {
  const [counter, setCounter] = useState(0);
  return (
    <Box style={boxStyle} sx={boxSX}>
      <Text sx={textSX}>Component C</Text>
      <RenderCounter />
      <Button
        style={buttonStyle}
        onClick={() =>
          setCounter((oldcounter) => oldcounter + 1)
        }
      >
        Counter: {counter}
      </Button>
    </Box>
  );
}

function SlowComponentC() {
  const [counter, setCounter] = useState(0);
  let now = performance.now();
  while (performance.now() - now < 1000) {
    // Artificial delay -- do nothing for 1000ms
  }
  return (
    <Box style={boxStyle} sx={boxSX}>
      <Text sx={textSX}>Slow Component C</Text>
      <RenderCounter />
      <Button
        style={buttonStyle}
        onClick={() =>
          setCounter((oldcounter) => oldcounter + 1)
        }
      >
        Counter: {counter}
      </Button>
    </Box>
  );
}

const MemoizedSlowComponentC = React.memo(SlowComponentC);

MemoizedSlowComponentC.displayName =
  "MemoizedSlowComponentC";

function ComponentD() {
  const [counter, setCounter] = useState(0);
  return (
    <Box style={boxStyle} sx={boxSX}>
      <Text sx={textSX}>Component D</Text>
      <RenderCounter />
      <Button
        style={buttonStyle}
        onClick={() =>
          setCounter((oldcounter) => oldcounter + 1)
        }
      >
        Counter: {counter}
      </Button>
      <ComponentE />
    </Box>
  );
}

function ComponentE() {
  const [counter, setCounter] = useState(0);
  return (
    <Box style={boxStyle} sx={boxSX}>
      <Text sx={textSX}>Component E</Text>
      <RenderCounter />
      <Button
        style={buttonStyle}
        onClick={() =>
          setCounter((oldcounter) => oldcounter + 1)
        }
      >
        Counter: {counter}
      </Button>
    </Box>
  );
}
