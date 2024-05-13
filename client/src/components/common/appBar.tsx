import * as React from "react";
// import { styled } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";

import { ExpandMore } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import profile from "../../assets/images/images-profile.svg";
import { SearchComponent } from "../inputs";

export const AppBarComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const notification = [
    {
      userName: "Ahmed",
      description: "Baag"
    },
    {
      userName: "Ahmed",
      description: "Baag"
    },
    {
      userName: "Ahmed",
      description: "Baag"
    },
    {
      userName: "Ahmed",
      description: "Baag"
    }
  ]

  const [toogle, setToogle] = React.useState(false);
  return (
    <AppBar
      position="fixed"
      sx={{
        // justifyContent: "flex-end",
        alignItems: "flex-end",
        backgroundColor: "#FFF",
        boxShadow: "none"
      }}
    >
      <Toolbar>
        <SearchComponent />
        <IconButton className="position-relative">
          <div onClick={() => setToogle(!toogle)}>

            <MailOutlinedIcon />
          </div>
          {toogle &&
            <div className="notification-content">
              <h1>New Messages</h1>
              <div className="notifictaion-body">
                {notification.map((item, index) => (
                  <div className="d-flex inner-content justify-content-between"
                    key={index}>

                    <div className="d-flex ">
                      <div className="flex-shrink-0">
                        <img src={profile} alt="img not found" />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h2>{item.userName}</h2>
                        <p>{item.description}</p>
                      </div>
                    </div>
                    <div>

                      <span>Today, 12.11pm</span>
                      <div className="notification">
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="notification-button">See All Messages</button>
            </div>
          }
        </IconButton>
        <IconButton>
          <NotificationsNoneOutlinedIcon />

        </IconButton>

        <IconButton
          onClick={handleProfileMenuOpen}
          aria-controls="menu-appbar"
          aria-haspopup="true"
          aria-label="account of current user"
          size="large"
        >
          <AccountCircleIcon />
          <ExpandMore />
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
          open={open}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
