import "./css/purgeCss/index.css";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import { AlertTitle, Button, Typography } from "@mui/material";
import { blue, green } from "@mui/material/colors";
import { Box, ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import { Routes, Route, useLocation } from "react-router-dom";
import Profile from "../src/component/Profile";
import Login from "./component/Login";
import { Navigate, useNavigate } from "react-router-dom";
import { Appcontext } from "./contextApi/context";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
	const navigate = useNavigate();
	const location = useLocation();
	return (
		<Box bgcolor="primary.main" minHeight="100vh">
			{!(location.pathname === "/login") &&
				!(localStorage.getItem("authStatus") === "true") && (
					<div>
						<Alert severity="error">
							<AlertTitle>
								please login first
							</AlertTitle>
						</Alert>
						<Button
							variant="contained"
							onClick={() => {
								navigate("/login");
							}}
						>
							Login
						</Button>
					</div>
				)}
			<div>
				<Routes>
					{localStorage.getItem("authStatus") ===
						"true" && (
						<Route
							path="/app"
							element={<ProtectedRoute />}
						>
							<Route
								path="profile"
								element={<Profile />}
							/>
						</Route>
					)}
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</Box>
	);
}

export default App;
