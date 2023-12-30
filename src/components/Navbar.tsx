import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import PoolIcon from "@mui/icons-material/Pool";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 200;

function Navbar() {
  const navigate = useNavigate();

  const displayIcon = (sport: string) => {
    switch (sport) {
      case "Volleyball":
        return <SportsVolleyballIcon />;
      case "Track":
        return <DirectionsRunIcon />;
      case "Swimming":
        return <PoolIcon />;
      case "Basketball":
        return <SportsBasketballIcon />;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: "#031745",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Nightingale
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/")}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            {["Volleyball", "Track", "Swimming", "Basketball"].map(
              (text: string) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => navigate(`/${text}`)}>
                    <ListItemIcon>{displayIcon(text)}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;
