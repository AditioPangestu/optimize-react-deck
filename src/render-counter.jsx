/** @jsx jsx */
import React, { useRef, useState, useEffect } from "react";
import { jsx } from "theme-ui";
import { Text } from "@theme-ui/components";

export function RenderCounter() {
  const countRef = useRef(1);
  const [, setTrigger] = useState(0);
  useEffect(() => { countRef.current += 1 });
  return (
    <Text
      sx={{
        fontSize: 4,
        fontWeight: "bold",
      }}
      onClick={() => {
        // Handle reset render count
        countRef.current = 1;
        setTrigger((old) => old + 1);
      }}
    >
      Render counter: {countRef.current}
    </Text>
  );
}
