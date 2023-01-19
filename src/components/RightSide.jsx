import { Box, Typography } from "@mui/material";
import React from "react";
import TodoCard from "./TodoCard";

const RightSide = () => {
  return (
    <Box>
      <Typography
        variant="h2"
        fontSize="16px"
        fontWeight="bold"
        color="#068AD4"
        pb="30px"
      >
        Filter by
      </Typography>

      <Box>
        <TodoCard />
      </Box>
    </Box>
  );
};

export default RightSide;
