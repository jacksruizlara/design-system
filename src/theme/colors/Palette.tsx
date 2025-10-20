import { Grid, Paper, Stack, styled, Typography } from '@mui/material';
import Palette from "./palette";

const SubItem = styled(Paper)(() => ({
    width: '10rem',
    height: '3.5rem',
    border: 'none',
    boxShadow: 'none',
    borderRadius: 0,
    justifyContent: 'center',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
}));

const PaletteComponent = () => {

    return (
        <Grid container spacing={4}>
            {Object.entries(Palette).map(([category, colorTypes]) => {
                return (
                    <Stack
                        direction="column"
                        spacing={0}
                        sx={{
                            justifyContent: "flex-start",
                            alignItems: "center",
                            margin: 0,
                            padding: 0,
                            border: 'solid 1px #000000',
                            borderRadius: '1rem',
                        }}
                    >
                        <Typography>{category.toUpperCase()}</Typography>
                        <SubItem sx={{ backgroundColor: colorTypes.inactive }}><Typography>Inactive<br />({colorTypes.inactive})</Typography></SubItem>
                        <SubItem sx={{ backgroundColor: colorTypes.active }}><Typography>Active<br />({colorTypes.active})</Typography></SubItem>
                        <SubItem sx={{ backgroundColor: colorTypes.hover, borderEndEndRadius: '1rem', borderEndStartRadius: '1rem' }}><Typography>Hover<br />({colorTypes.hover})</Typography></SubItem>
                    </Stack>
                );
            })}
        </Grid >
    );
};

export default PaletteComponent;
