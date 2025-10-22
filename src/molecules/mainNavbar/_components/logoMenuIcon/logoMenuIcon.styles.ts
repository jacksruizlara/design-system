import { leftPanelWidth } from "./logoMenuIcon.constants";

export const mainContainer = {
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 2,
};

export const logoContainerSx = (isLeftPanelCollapsed: boolean) => ({
    paddingRight: 1,
    alignItems: "center",
    justifyContent: "center",
    display: { xs: "none", sm: "flex" },
    position: "relative",
    width: isLeftPanelCollapsed ? leftPanelWidth.collapsed : leftPanelWidth.expanded,
    transition: "width 0.3s ease-in-out",
});

export const textLogoSx = (isLeftPanelCollapsed: boolean) => ({
    position: 'absolute',
    opacity: isLeftPanelCollapsed ? 0 : 1,
    transition: 'opacity 0.1s ease-out',
    whiteSpace: 'nowrap',
});

export const shortTextLogo = (isLeftPanelCollapsed: boolean) => ({
    position: 'absolute',
    opacity: isLeftPanelCollapsed ? 1 : 0,
    transition: 'opacity 0.1s ease-out',
    whiteSpace: 'nowrap',
});