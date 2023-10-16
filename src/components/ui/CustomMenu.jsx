import { Avatar, IconButton, Menu, MenuItem, Stack, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import PropTypes from 'prop-types';

CustomMenu.propTypes = {
    userName : PropTypes.string
}

function CustomMenu({ userName}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSignOut = () => {
    alert("signed out");
  };
  return (
    <>
      <Tooltip title="Account settings">
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          onClick={handleClick}
        >
          <Typography>{userName}</Typography>
          <IconButton
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Stack>
      </Tooltip>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
      </Menu>
    </>
  );
}

export default CustomMenu;
