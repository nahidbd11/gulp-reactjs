import { Alert, Button, Container, TextField, Typography } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { Appcontext } from "../contextApi/context";
import { useLocation, useNavigate } from "react-router-dom";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "../css/purgeCss/index.css";

const customtheme = createTheme({});
const myStyle = makeStyles({
	myclass: {
		backgroundColor: "#f1f1f1",
	},
});
const Login = () => {
	const navigate = useNavigate();

	const { myclass } = myStyle();
	const { handleLogin, status } = useContext(Appcontext);

	const [userError, setUserError] = useState(false);
	const [passError, setPassError] = useState(false);

	const [username, setUserName] = useState(null);
	const [password, setPassword] = useState(null);

	const ValidateFunc = () => {
		if (username == null || username === "") {
			console.log("please inpute username");
			setUserError(true);
		}
		if (password == null || password === "") {
			console.log("please input password");
			setPassError(true);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		ValidateFunc();
		handleLogin(username, password);
	};
	return (
		<ThemeProvider theme={customtheme}>
			<Container maxWidth="xs" className={myclass}>
				<form
					onSubmit={handleSubmit}
					style={{ margin: "1rem" }}
				>
					<Box display="flex" flexDirection="column">
						<Typography
							variant="h4"
							align="center"
							gutterBottom={true}
						>
							Sign <LockOpenIcon />
						</Typography>

						<TextField
							label="User Name"
							placeholder="username"
							variant="outlined"
							size="small"
							margin="normal"
							onChange={(e) => {
								setUserName(e.target.value);
								setUserError(false);
							}}
							color="secondary"
							error={userError}
							helperText={
								userError &&
								"please input username"
							}
						/>
						<TextField
							size="small"
							type="password"
							label="Password"
							placeholder="password"
							variant="outlined"
							margin="normal"
							onChange={(e) => {
								setPassword(e.target.value);
								setPassError(false);
							}}
							error={passError}
							helperText={
								passError &&
								"please input password"
							}
						/>

						<Button
							type="submit"
							variant="contained"
							sx={{
								my: 2,
							}}
						>
							Submit
						</Button>
						{status !== "" && (
							<Alert severity="error">
								{status}
							</Alert>
						)}
					</Box>
				</form>
			</Container>
		</ThemeProvider>
	);
};

export default Login;
