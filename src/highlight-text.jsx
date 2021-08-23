/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Text } from "@theme-ui/components";

export function HighlightText({ children }) {
	return (
		<Text
			as="span"
      sx={{
				color: 'primary',
      }}
    >{children}</Text>
	)
}