import { Grid, Typography } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { exitDefaultOptionSx, logoutIconSx } from "./ExitDefaultOption.styles";

const ExitDefaultOption = () => {
  const exitText: string = "EXIT";
  return (<Grid
    container
    direction="row"
    sx={exitDefaultOptionSx}
  >
    <Typography>{exitText}</Typography>
    <LogoutIcon sx={logoutIconSx} />
  </Grid>);
};

export default ExitDefaultOption;