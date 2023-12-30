import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export function Track() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, ml: 25 }}>
      <Toolbar />
      <Typography>Track</Typography>
    </Box>
  );
}
