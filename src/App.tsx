import { useState } from "react";
import {
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  ListItemButton,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import PetsIcon from "@mui/icons-material/Pets";

import { Routes, Route, Link } from "react-router-dom";
import { lightTheme, darkTheme } from "./theme";
import InsuranceReviews from "./pages/InsuranceReviews/InsuranceReviews";
import About from "./pages/About/About";
import FoodReviews from "./pages/FoodReviews/FoodReviews";
import Home from "./pages/Home/Home";
import UserAgreement from "./pages/UserAgreement/UserAgreement.tsx";
import BreedResults from "./pages/BreedResults/BreedResults.tsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleTheme = () => setDarkMode((prev) => !prev);
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/insurance-reviews", label: "Insurance Reviews" },
    { to: "/food-reviews", label: "Food Reviews" },
    { to: "/user-agreement", label: "User Agreement" },
  ];

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />

      <AppBar position="static">
        <Toolbar>
          <PetsIcon sx={{ mr: 1 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Furlancer
          </Typography>

          {isMobile ? (
            <>
              <IconButton color="inherit" edge="end" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer}
                >
                  <List>
                    {navLinks.map((link) => (
                      <ListItem disablePadding key={link.to}>
                        <ListItemButton component={Link} to={link.to}>
                          <ListItemText primary={link.label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                    <ListItem disablePadding>
                      <ListItemButton onClick={toggleTheme}>
                        <ListItemText
                          primary={`Switch to ${
                            darkMode ? "Light" : "Dark"
                          } Mode`}
                        />
                        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <>
              {navLinks.map((link) => (
                <Button
                  key={link.to}
                  color="inherit"
                  component={Link}
                  to={link.to}
                >
                  {link.label}
                </Button>
              ))}
              <IconButton color="inherit" onClick={toggleTheme}>
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Box className="container fade-slide-in">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insurance-reviews" element={<InsuranceReviews />} />
          <Route path="/food-reviews" element={<FoodReviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/user-agreement" element={<UserAgreement />} />
          <Route path="/results" element={<BreedResults />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
