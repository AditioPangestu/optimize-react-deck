/** @jsx jsx */
import React from "react";
import { jsx, Box } from "theme-ui";

export function Layout({ children }) {
	return (
		<Box
      style={{
        width: '100vw',
        height: '100vh',
      }}
      sx={{
        py: 5,
        px: 6,
        display: "flex",
				flexDirection: 'column',
      }}
    >{children}</Box>
	)
}