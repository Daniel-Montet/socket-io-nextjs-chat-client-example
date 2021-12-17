import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth={false}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Avatar alt="" src="/logo.png" />
          </Grid>
          <Grid item xs={4}>
            // search
          </Grid>
          <Grid item xs={8}>
            //clearchat more
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
