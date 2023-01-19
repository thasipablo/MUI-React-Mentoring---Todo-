import { Add } from "@mui/icons-material";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import Filter from "./Filter";

const LeftSide = () => {
  return (
    <>
      <Typography fontSize="16px" fontWeight="bold" color="#068AD4" pb="30px">
        Filter by
      </Typography>

      {/* filters */}
      <Filter name="All" />
      <Filter name="To do" />
      <Filter name="Done" />

      {/* form */}
      <Box bgcolor="#F2F0F0" display="flex" my="30px">
        <TextField
          fullWidth
          size="small"
          placeholder="New todo"
          sx={{ border: "0 solid transparent", outline: "0" }}
        />
        {/* <Button color="secondary"  > <Add /> </Button> */}
        <IconButton sx={{ borderRadius: 0, bgcolor: "#33DDC9" }}>
          <Add />
        </IconButton>
      </Box>

      {/* stats */}
      <Typography pb="30px" fontSize="16px" fontWeight="bold" color="#068AD4">
        Statistics
      </Typography>
    </>
  );
};

export default LeftSide;
