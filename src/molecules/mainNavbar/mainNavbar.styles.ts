import Palette from "../../theme/colors/palette";
import { navbarHeight } from "./mainNavbar.constants";

export const mainNavbarSx = {
    backgroundColor: Palette.primary.active,
    color: Palette.primary.text?.active,
    margin: 0,
    padding: 0,
    justifyContent: "space-between",
    alignItems: "center",
    height: navbarHeight,
};

export const shortLogoSx = {
    display: { xs: "flex", sm: "none" }
};