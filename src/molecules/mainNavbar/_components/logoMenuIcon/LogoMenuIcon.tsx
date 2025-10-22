import { Grid } from "@mui/material";
import { useState } from "react";
import IconButton from "../../../../atoms/iconButton/IconButton";
import { Menu } from "@mui/icons-material";
import { logoContainerSx, mainContainer, shortTextLogo, textLogoSx } from "./logoMenuIcon.styles";

export interface LogoMenuIconProps {
    logo: {
        text: React.ReactNode,
        shortText: React.ReactNode,
    },
    customMenuAction?: () => void
}

const LogoMenuIcon = ({
    logo,
    customMenuAction = () => { },
}: LogoMenuIconProps) => {
    const [isLeftPanelCollapsed, setIsLeftPanelCollapsed] = useState(false);

    const iconButtonClick = async () => {
        await customMenuAction();
        setIsLeftPanelCollapsed(!isLeftPanelCollapsed);
    };

    return (
        <Grid
            container
            direction="row"
            sx={mainContainer}
        >
            <Grid
                container
                direction="row"
                sx={logoContainerSx(isLeftPanelCollapsed)}
            >
                <Grid sx={textLogoSx(isLeftPanelCollapsed)}>
                    {logo.text}
                </Grid>
                <Grid sx={shortTextLogo(isLeftPanelCollapsed)}>
                    {logo.shortText}
                </Grid>
            </Grid>
            <IconButton
                rounded="circle"
                onClick={iconButtonClick}
            ><Menu /></IconButton>
        </Grid>
    )
}

export default LogoMenuIcon