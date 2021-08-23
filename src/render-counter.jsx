/** @jsx jsx */
import React, { useRef, useLayoutEffect } from "react";
import { jsx } from "theme-ui";
import { Text } from "@theme-ui/components";

export function RenderCounter() {
  const countRef = useRef(0);
  useLayoutEffect(() => {
    countRef.current += 1;
  });
  return (
    <Text
      sx={{
        fontSize: 4,
        fontWeight: "bold",
      }}
    >
      Render counter: {countRef.current}
    </Text>
  );
}
