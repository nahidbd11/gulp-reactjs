import "./css/purgeCss/index.css";
import React, { useEffect } from "react";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { green, red, yellow } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";

const customTheme = createTheme({
  palette: {
    primary: {
      main: yellow["A700"],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  const [versity, setVersity] = useState("");
  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?country=bangladesh")
      .then((response) => response.json())
      .then((data) => setVersity(data[20]["name"]))
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <ThemeProvider theme={customTheme}>
      <div className="container bg-primary">
        <Alert severity="info" color="primary">
          <AlertTitle>Name:{versity}</AlertTitle>
          <p>
            website name : <strong>cuet.ac.bd</strong>
          </p>
        </Alert>
      </div>
    </ThemeProvider>
  );
}

export default App;
