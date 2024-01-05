import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useDrawer } from "../context/DrawerContext";

export function Track() {
  const { open } = useDrawer();

  return (
    <Box
      component="main"
      sx={open ? { flexGrow: 1, p: 3, ml: 25 } : { flexGrow: 1, p: 3, ml: 10 }}
    >
      <Toolbar />
      <Typography>Track</Typography>
    </Box>
  );
}
