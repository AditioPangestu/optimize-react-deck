/** @jsx jsx */
import React from "react";
import { jsx, Box } from "theme-ui";

export function Layout({ children }) {
	return (
		<Box
      sx={{
				w: '100vw',
				h: '100vh',
        py: 4,
        px: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
				flexDirection: 'column',
      }}
    >{children}</Box>
	)
}