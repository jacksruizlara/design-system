import { Avatar, Grid } from "@mui/material";
import Palette from "../../theme/colors/palette";
import { useState } from "react";
import IconButton from "../../atoms/iconButton/IconButton";
import { Menu } from '@mui/icons-material';

export interface MainNavbarProps {
  logo: {
    text: React.ReactNode,
    shortText: React.ReactNode,
  },
  avatar: {
    alt: string,
    src: string,
  },
}

const MainNavbar = ({ logo, avatar }: MainNavbarProps) => {
  const [isLeftPanelCollapsed, setIsLeftPanelCollapsed] = useState(false);
  const leftPanelWidth: { collapsed: number, expanded: number } = {
    collapsed: 50,
    expanded: 200
  };
  const navbarHeight = 50;

  return (
    <Grid container
      direction="column"
      sx={{
        backgroundColor: Palette.primary.active,
        color: Palette.primary.text?.active,
        margin: 0,
        padding: 0,
      }}
    >
      <Grid
        container
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: { xs: "flex", sm: "none" },
          height: navbarHeight,
        }}
      >
        {logo.text}
      </Grid>
      <Grid
        container
        direction="row"
        sx={{
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
            onClick={() => setIsLeftPanelCollapsed(!isLeftPanelCollapsed)}
          ><Menu /></IconButton>
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
          <Avatar alt={avatar.alt} src={avatar.src} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MainNavbar;