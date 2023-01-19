import { Box, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Box
        sx={{
          p: "27px",
          pl: "88px",
          backgroundColor: "#068AD4",
          color: "#fff",
        }}
      >
        <Typography fontSize="20px" fontWeight="bold">
          TODO APP
        </Typography>
      </Box>
      <Container sx={{ pt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={4} md={3}>
            <LeftSide />
          </Grid>
          <Grid item xs={8} md={9}>
            <RightSide />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
