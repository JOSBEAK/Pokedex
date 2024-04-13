import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";
import { Home } from "@mui/icons-material";
import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",

  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      height: "4ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

const getTypeColor = (type) => {
  const typeColors = {
    normal: "bg-normal",
    fire: "bg-fire",
    water: "bg-water",
    electric: "bg-electric",
    grass: "bg-grass",
    ice: "bg-ice",
    fighting: "bg-fighting",
    poison: "bg-poison",
    ground: "bg-ground",
    flying: "bg-flying",
    psychic: "bg-psychic",
    bug: "bg-bug",
    rock: "bg-rock",
    ghost: "bg-ghost",
    dragon: "bg-dragon",
    dark: "bg-dark",
    steel: "bg-steel",
    fairy: "bg-fairy",
  };

  // Return the corresponding background color class for the given type
  return typeColors[type.toLowerCase()] || "bg-gray-400"; // Default to gray if type is not found
};

export default function NavBar({ handleSearch }) {
  const [searchInput, setSearchInput] = useState("");
  const [hover, setHover] = useState(false);
  const typesArray = [
    "Normal",
    "Fire",
    "Water",
    "Electric",
    "Grass",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy",
  ];

  return (
    <Box flexGrow={1}>
      <AppBar position="static" sx={{ backgroundColor: "rgb(6, 11, 40)" }}>
        <div className=" p-4">
          <button
            className="p-2 px-4 w-[8%] rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 text-white flex justify-center items-center"
            style={{
              boxShadow: "-7px -7px 15px #0e0e0f, 7px 7px 15px #36363d",
            }}
            onClick={() => {
              handleSearch("");
              setSearchInput("");
            }}
          >
            <Home />
            <span className="ml-2">Start</span>
          </button>

          <Toolbar className="flex flex-col">
            <p className="font-black text-3xl mr-4 p-2">Search By Type</p>
            <div className="flex overflow-x-auto space-x-2">
              {typesArray.map((item, index) => (
                <button
                  key={index}
                  className={`font-bold rounded p-1 ${getTypeColor(item)}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </Toolbar>
          <div className="flex items-center justify-center p-3">
            <Search className="flex">
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button
                onClick={() => {
                  handleSearch(searchInput);
                }}
                className=" px-2"
                style={{ backgroundColor: hover ? "blue" : "" }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <SearchIcon />
              </button>
            </Search>
          </div>
        </div>
      </AppBar>
    </Box>
  );
}
