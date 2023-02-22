import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
const Auth = () => {
  return (
    <div>
      <form>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow='10px 10px 20px #ccc'
          padding={3}
          borderRadius={5}
          margin = 'auto'
          marginTop={5}  
        >
          <Typography>Login</Typography>
          <TextField margin="normal"></TextField>
          <TextField margin="normal"></TextField>
          <TextField margin="normal"></TextField>
          <Button>Submit</Button>
        </Box>
      </form>
    </div>
  );
};
export default Auth;
