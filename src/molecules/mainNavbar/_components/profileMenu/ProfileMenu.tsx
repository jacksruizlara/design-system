import { Avatar, Grid, MenuItem, IconButton as MuiIconButton, Menu as MuiMenu } from "@mui/material";
import ExitDefaultOption from "./ExitDefaultOption";
import { useState } from "react";
import { exitOptionSx, iconButtonSx, mainGridSx } from "./profileMenu.styles";

export interface ProfileMenuProps {
    avatar: {
        alt: string,
        src: string,
    },
    showExitOption?: boolean,
    exitOption?: React.ReactNode,
    profileMenuOptions?: React.ReactNode[],
    customExitAction?: () => void,
}

const ProfileMenu = ({
    avatar,
    showExitOption = true,
    exitOption = (<ExitDefaultOption />),
    profileMenuOptions,
    customExitAction = () => { },
}: ProfileMenuProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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
            sx={mainGridSx}
        >
            <MuiIconButton
                onClick={handleClick}
                sx={iconButtonSx}>
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
                {
                    showExitOption && <MenuItem
                        onClick={handleClose}
                        sx={exitOptionSx}
                    >
                        {exitOption}
                    </MenuItem>
                }
            </MuiMenu>
        </Grid>
    );
}

export default ProfileMenu