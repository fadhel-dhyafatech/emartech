// import { Box, List, styled } from "@mui/material";
// import { FC } from "react";
// import { SideBarBtns } from "./sideBarNavLinks";
// import { Logo } from "@/components/Logo";

// const SideBarWrapper = styled(Box)`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 250px;
//   height: 100vh;
//   display: block;
//   z-index: 2;
//   transition: transform 0.35 ease-in-out;
// `;

// const SideBarBody = styled(Box)`
//   background: linear-gradient(0deg, #3558f4, #1d8cf8);
//   height: 100vh;
//   overflow: hidden;
// `;

// const ParentList = styled(List)`
//   position: relative;
//   list-style: none;
//   padding: 0;
//   display: block;
//   transition: all 0.5s ease;
// `;

// const dummyList = [
//   {
//     to: "/dashboard/home",
//     icon: <i className="fa-solid fa-id-card"></i>,
//     title: "Dashboard",
//   },
//   {
//     to: "/inventory",
//     icon: <i className="fa-solid fa-id-card"></i>,
//     title: "Inventory",
//     subBtn: ["All Inventory", "Shipments", "Analytics"],
//   },
//   {
//     to: "/catalog",
//     icon: <i className="fa-solid fa-id-card"></i>,
//     title: "Catalog",
//     subBtn: ["Add Product", "Selling Application"],
//   },
//   {
//     to: "/orders",
//     icon: <i className="fa-solid fa-id-card"></i>,
//     title: "Orders",
//     subBtn: ["Manage Orders", "Manage Returns", "Manage Claim"],
//   },

//   {
//     to: "/shipments",
//     icon: <i className="fa-solid fa-id-card"></i>,
//     title: "Shipments",
//   },
//   {
//     to: "/performance",
//     icon: <i className="fa-solid fa-id-card"></i>,
//     title: "Performance",
//     subBtn: ["Store Analytic", "Store Review"],
//   },
//   {
//     to: "/payments",
//     icon: <i className="fa-solid fa-id-card"></i>,
//     title: "Payments",
//   },
// ];

// export const SideBar: FC = () => {
//   return (
//     <div>
//       <SideBarWrapper>
//         <SideBarBody>
//           <Logo />
//           <ParentList>
//             {dummyList.map((item, index) => (
//               <SideBarBtns to={item.to} icon={item.icon} title={item.title} />
//             ))}
//           </ParentList>
//         </SideBarBody>
//       </SideBarWrapper>
//     </div>
//   );
// };

// components/Sidebar.js
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import { CSSObject, Theme, styled } from "@mui/material/styles";
import * as React from "react";
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";

import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ListItemButton } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

interface SidebarProps {
  dummyList: {
    to: string;
    icon: any;
    title: string;
    subBtn?: string[];
  }[];
}

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })<AppBarProps>(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const Sidebar = ({ dummyList }: SidebarProps) => {
  console.log("DUMMYLIST", dummyList);
  //   const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  //   const handleDrawerOpen = () => {
  //     setOpen(true);
  //   };

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  const [openSubmenu, setOpenSubmenu] = React.useState<string>("");

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu((prevOpen) => (prevOpen === title ? "" : title));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <Box sx={{
          height: "100%", background: "linear-gradient(270.59deg, #079759 0.48%, #35C350 99.47%)"
        }}>
          <DrawerHeader>
            {open && (
              <img
                src={`../../src/assets/images/dashboard-white-logo.svg`}
                alt="logo"
              // style={{ width: "120px" }}
              />
            )}

            <IconButton onClick={handleDrawerClose}>
              {open ? (
                <ChevronRightIcon sx={{ color: "white" }} />
              ) : (
                <MenuIcon sx={{ color: "white" }} />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {dummyList?.map((item, index) => (
              <React.Fragment key={index}>
                <ListItemButton
                  onClick={() =>
                    item.subBtn ? toggleSubmenu(item.title) : null
                  }
                  sx={{ alignItems: "center" }}
                >
                  <ListItemIcon>
                    {/* <InboxIcon /> */}
                    <img src={item.icon} style={{ width: 20, height: 20 }} />
                  </ListItemIcon>

                  <ListItemText
                    primary={item.title}
                    style={{ color: "white", fontSize: "15px" }}
                  />
                  {item.subBtn &&
                    (openSubmenu === item.title ? (
                      <ExpandLess sx={{ color: "white" }} />
                    ) : (
                      <ExpandMore sx={{ color: "white" }} />
                    ))}
                </ListItemButton>
                {item.subBtn && (
                  <Collapse
                    in={openSubmenu === item.title}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {item.subBtn.map((subItem, subIndex) => (
                        <ListItem key={subIndex} button sx={{ pl: 4 }}>
                          <ListItemText
                            primary={subItem}
                            style={{ color: "white" }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
