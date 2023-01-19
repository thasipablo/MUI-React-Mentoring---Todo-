import { ChevronRight } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import React from "react";

const Filter = (props) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      pb="12px"
      sx={{ color: "#7B858A" }}
    >
      <Typography>{props.name}</Typography>
      <ChevronRight />
    </Stack>
  );
};

export default Filter;
