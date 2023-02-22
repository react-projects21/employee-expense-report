import React from "react";
import { AppBar, Button, Toolbar, Box } from "@mui/material";
import exp from './images/exp.png'
import './Header.css';
const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(62,16,13,1) 11%, rgba(61,205,186,1) 55%, rgba(8,26,99,1) 100%)",
      }}
    >
      <Toolbar>
        {/* <Typography variant="h5">Expense Report</Typography> */}
        <img className="exp" src={exp} alt='expense'></img>
        <Box display="flex" marginLeft="auto">
          {/* <Button
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >
            Login
          </Button> */}

          <Button
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
            className="signup"
          >
            Signup
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
