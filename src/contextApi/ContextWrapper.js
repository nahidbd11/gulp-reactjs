import { Appcontext } from "./context";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ContextWrapper = ({ children }) => {
	const navigate = useNavigate();
	const [status, setStatus] = useState("");

	const handleLogin = (username, password) => {
		fetch(
			`http://localhost:3001/users?username=${username}&password=${password}`
		)
			.then((data) => data.json())
			.then((data) => {
				if (data.length !== 0) {
					localStorage.setItem("authStatus", true);

					navigate("/app");
				} else {
					setStatus("username or pass is incorrect");
				}
			})
			.catch((err) => console.log(err));
	};

	const handleLogout = () => {
		localStorage.removeItem("authStatus");
		navigate("/login");
	};

	return (
		<Appcontext.Provider value={{ status, handleLogin, handleLogout }}>
			{children}
		</Appcontext.Provider>
	);
};

export default ContextWrapper;
