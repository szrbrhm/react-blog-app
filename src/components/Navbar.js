import * as React from "react";
import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "../auth/firebase";

export default function MenuAppBar() {
  
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);


  const logOut = () => {
    handleClose();
    signOut();
  }

  const newOpen = () => {
    handleClose();
    history.push('/new')
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
   
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a href="/">
              <img
                src="https://eds-fireblog.herokuapp.com/static/media/cw.041cf5e8.jpeg"
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
            </a>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a
              href="https://github.com/szrbrhm"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <i>{"< SzrBrhm / > BLOG"} </i>
            </a>
          </Typography>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {currentUser ? (
                <h3>{currentUser.Closed}</h3>
              ) : (
                <MenuItem
                  onClick={handleClose}
                  onClick={() => history.push("/login")}
                >
                  Login
                </MenuItem>
              )}
              {currentUser ? (
                <>
                <MenuItem onClick={newOpen}  >
                 
                 <span >New</span>

             </MenuItem>
             <MenuItem onClick={logOut}  >
                 
                  <span >Profile</span>

              </MenuItem>
                <MenuItem onClick={logOut}  >
                 
                 <span >Logout</span>

             </MenuItem>


                </>

              ) : (
                <MenuItem
                  onClick={handleClose}
                  onClick={() => history.push("/register")}
                >
                  Register
                </MenuItem>
              )}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
