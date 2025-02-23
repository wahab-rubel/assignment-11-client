import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Home, ContactMail, Room, Book, Person } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const NavigationMenu = () => {
  const menuItems = [
    { text: "Home", icon: <Home />, path: "/" },
    { text: "Contact", icon: <ContactMail />, path: "/contact" },
    { text: "Services", icon: <Room />, path: "/services" },
    { text: "Rooms", icon: <Room />, path: "/rooms" },
    { text: "Booking", icon: <Book />, path: "/booking" },
    { text: "Full Profile", icon: <Person />, path: "/profile" },
  ];

  return (
    <Drawer variant="permanent">
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            component={NavLink}
            to={item.path}
            key={item.text}
            activeClassName="Mui-selected"
            exact
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default NavigationMenu;
