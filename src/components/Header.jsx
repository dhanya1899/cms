import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom"; // React-router Link
import "../App.css";
import "./header.css";

// Define the pages and their paths in an array of objects
const pages = [
  { name: "Home", path: "https://asett.cms.gov/ASETT_ST_CMP_HomePage" },
  { name: "About ASETT", path: "https://asett.cms.gov/ASETT_ST_CMP_About" },
  { name: "Contact Us", path: "https://asett.cms.gov/ASETT_ST_CMP_ContactUs" },
  { name: "Support", path: "/support" },
];
const user = ["Register", "Login"];
const supportItems = [
  "ASETT Glossary",
  "Frequently Asked Questions",
  "User Manual",
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElSupport, setAnchorElSupport] = React.useState(null); // State for support dropdown

  const handleOpenSupportMenu = (event) => {
    setAnchorElSupport(event.currentTarget); // Open the dropdown when Support is hovered
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseSupportMenu = () => {
    setAnchorElSupport(null); // Close the Support dropdown
  };

  return (
    <>
      <AppBar position="static" sx={{ marginTop: -1 }}>
        <Container maxWidth="xl" className="backgroundColor">
          <Toolbar disableGutters>
            {/* Mobile menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    className="no-change-color"
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      <Link
                        to={page.path}
                        style={{
                          color: "inherit",
                          textDecoration: "none",
                        }}
                      >
                        {page.name}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Desktop menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) =>
                page.name !== "Support" ? ( // Exclude Support from this section
                  <Link
                    key={page.name}
                    to={page.path} // Use the path from the object
                    onClick={handleCloseNavMenu}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      display: "block",
                      my: 2,
                      marginRight: "20px",
                    }}
                  >
                    {page.name}
                  </Link>
                ) : (
                  <>
                    {/* Support button */}
                    <Link
                      key={page.name}
                      to={page.path} // Use the path from the object
                      onMouseEnter={handleOpenSupportMenu} // Open on hover
                      style={{
                        color: "white",
                        textDecoration: "none",
                        display: "block",
                        my: 2,
                        marginRight: "20px",
                      }}
                    >
                      {page.name}
                    </Link>

                    {/* Dropdown menu for Support */}
                    <Menu
                      anchorEl={anchorElSupport}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElSupport)} // Control the visibility of the dropdown
                      onClose={handleCloseSupportMenu} // Close the dropdown
                      onMouseLeave={handleCloseSupportMenu} // Ensure it closes when mouse leaves the dropdown
                    >
                      {supportItems.map((item) => (
                        <MenuItem key={item} onClick={handleCloseSupportMenu}>
                          <Typography>{item}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                )
              )}
            </Box>

            {/* User menu */}
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              {user.map((page) => (
                <Link
                  key={page}
                  style={{
                    my: 2,
                    color: "white",
                    textDecoration: "none",
                    display: "block",
                    marginRight: "20px",
                  }}
                >
                  {page}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
