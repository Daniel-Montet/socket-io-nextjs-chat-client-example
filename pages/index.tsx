import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { AccountCircle } from "@mui/icons-material";

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: "#AEB5C2",
          height: "100vh",
          width: "100vw",
          paddingLeft: 2,
          paddingRight: 2,
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Avatar alt="" src="/logo.png" />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={8}>
            //clearchat more
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
