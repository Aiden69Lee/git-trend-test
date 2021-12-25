import React from "react";
import { Box, Typography } from "@mui/material";

interface TopbarProps {
  content: string;
}
export const Topbar: React.FC<TopbarProps> = ({ content }) => {
  return (
    <Box
      sx={{
        padding: "40px 16px",
        borderWidth: "0 0 1px 0",
        borderColor: "secondary.main",
        borderStyle: "solid",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: 600,
          marginBottom: "6px",
          color: "text.primary",
        }}
      >
        Trending
      </Typography>
      <Typography variant="h5" sx={{ textAlign: "center", fontSize: "16px" }}>
        {content}
      </Typography>
    </Box>
  );
};
