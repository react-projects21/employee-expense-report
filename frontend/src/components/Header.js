import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import exp from '../components/images/exp.png'

const Header = () => {
  const [value, setValue] = useState();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  // const [issignup, setIsSignup] = useState(false);
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(36,0,0,1) 0%, rgba(40,115,150,1) 46%, rgba(0,212,255,1) 100%)",
      }}
    >
      <Toolbar>
        <img src={exp} alt='jay' />
        {/* <Typography variant="h5">EXPENSE REPORT</Typography> */}
        {isLoggedIn && (
          <Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab LinkComponent={Link} to="/details" label="Employee" />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              {/* <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Signup
              </Button> */}
            </>
          )}
          {isLoggedIn && (
            <Button
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
