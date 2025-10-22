import { Grid, } from "@mui/material";
import type { ProfileMenuProps } from "./_components/profileMenu/ProfileMenu";
import ProfileMenu from "./_components/profileMenu/ProfileMenu";
import { mainNavbarSx, shortLogoSx } from "./mainNavbar.styles";
import type { LogoMenuIconProps } from "./_components/logoMenuIcon/LogoMenuIcon";
import LogoMenuIcon from "./_components/logoMenuIcon/LogoMenuIcon";

export interface MainNavbarProps {
  profileMenuProps: ProfileMenuProps,
  logoMenuIconProps: LogoMenuIconProps,
}

const MainNavbar = ({
  profileMenuProps,
  logoMenuIconProps
}: MainNavbarProps) => {
  return (
    <Grid
      container
      direction="row"
      sx={mainNavbarSx}
    >
      <LogoMenuIcon {...logoMenuIconProps} />
      <Grid sx={shortLogoSx}>{logoMenuIconProps?.logo.shortText}</Grid>
      <ProfileMenu {...profileMenuProps} />
    </Grid>
  )
}

export default MainNavbar;