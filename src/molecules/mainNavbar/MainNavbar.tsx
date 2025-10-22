import { Avatar, Grid, Menu as MuiMenu, MenuItem, IconButton as MuiIconButton, Typography } from "@mui/material";
import Palette from "../../theme/colors/palette";
import React, { useState } from "react";
import IconButton from "../../atoms/iconButton/IconButton";
import { Menu } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';

export interface MainNavbarProps {
  logo: {
    text: React.ReactNode,
    shortText: React.ReactNode,
  },
  avatar: {
    alt: string,
    src: string,
  },
  showExitOption?: boolean,
  exitOption?: React.ReactNode,
  profileMenuOptions?: React.ReactNode[],
  customExitAction?: () => void,
  customMenuAction?: () => void
}

const ExitDefaultOption = () => {
  const exitText: string = "EXIT";
  return (<Grid
    container
    direction="row"
    sx={{
      justifyContent: "flex-start",
      alignItems: "center",
    }}
  >
    <Typography>{exitText}</Typography>
    <LogoutIcon sx={{ height: 16, width: 16, ml: 1 }} />
  </Grid>);
}

const MainNavbar = ({
  logo,
  avatar,
  showExitOption = true,
  exitOption = (<ExitDefaultOption />),
  profileMenuOptions,
  customExitAction = () => { },
  customMenuAction = () => { },
}: MainNavbarProps) => {
  const [isLeftPanelCollapsed, setIsLeftPanelCollapsed] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const leftPanelWidth: { collapsed: number, expanded: number } = {
    collapsed: 40,
    expanded: 180
  };
  const navbarHeight = 50;
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = async () => {
    setAnchorEl(null);
    await customExitAction();
  };

  return (
    <Grid
      container
      direction="row"
      sx={{
        backgroundColor: Palette.primary.active,
        color: Palette.primary.text?.active,
        margin: 0,
        padding: 0,
        justifyContent: "space-between",
        alignItems: "center",
        height: navbarHeight,
      }}
    >

      <Grid
        container
        direction="row"
        sx={{
          justifyContent: "flex-start",
          alignItems: "center",
          paddingLeft: 2,
        }}
      >
        <Grid
          container
          direction="row"
          sx={{
            paddingRight: 1,
            alignItems: "center",
            justifyContent: "center",
            display: { xs: "none", sm: "flex" },
            position: "relative",
            width: isLeftPanelCollapsed ? leftPanelWidth.collapsed : leftPanelWidth.expanded,
            transition: "width 0.3s ease-in-out",
          }}
        >
          <Grid sx={{
            position: 'absolute',
            opacity: isLeftPanelCollapsed ? 0 : 1,
            transition: 'opacity 0.1s ease-out',
            whiteSpace: 'nowrap',
          }}>
            {logo.text}
          </Grid>
          <Grid sx={{
            position: 'absolute',
            opacity: isLeftPanelCollapsed ? 1 : 0,
            transition: 'opacity 0.1s ease-out',
            whiteSpace: 'nowrap',
          }}>
            {logo.shortText}
          </Grid>
        </Grid>
        <IconButton
          rounded="circle"
          onClick={async () => {
            await customMenuAction();
            setIsLeftPanelCollapsed(!isLeftPanelCollapsed);
          }}
        ><Menu /></IconButton>
      </Grid>

      <Grid sx={{
        display: { xs: "flex", sm: "none" }
      }}>
        {logo.shortText}
      </Grid>

      <Grid
        container
        direction="row"
        sx={{
          justifyContent: "flex-end",
          alignItems: "center",
          paddingRight: 1,
        }}
      >
        <MuiIconButton onClick={handleClick} sx={{ p: 0, m: 0 }}>
          <Avatar alt={avatar.alt} src={avatar.src} />
        </MuiIconButton>
        <MuiMenu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: {
              'aria-labelledby': 'basic-button',
            },
          }}
        >
          {profileMenuOptions}
          {showExitOption && <MenuItem onClick={handleClose} sx={{ marginY: 0, paddingY: 0 }}>{exitOption}</MenuItem>}
        </MuiMenu>
      </Grid>

    </Grid>
  )
}

export default MainNavbar;