import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";

function MenuBar() {
  const [anchorElm, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        open menu
      </Button>
      <Button onClick={handleClick}>openmenu again</Button>
      <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Balance</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default MenuBar;
