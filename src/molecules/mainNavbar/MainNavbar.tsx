import { Grid } from "@mui/material";

const MainNavbar = () => {
  return (
    <Grid
      container
      direction="row"
      sx={{
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "skyblue"
      }}
      spacing={1}
    >
      <Grid
        container
        direction="row"
        sx={{
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        Left content.
      </Grid>
      <Grid
        container
        direction="row"
        sx={{
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >Right content</Grid>
    </Grid>
  )
}

export default MainNavbar;