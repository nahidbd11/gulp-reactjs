import { Button } from "@mui/material";
import { useContext } from "react";
import { Appcontext } from "../contextApi/context";
const Profile = () => {
	const { handleLogout } = useContext(Appcontext);
	return (
		<div>
			<p>hellow from profile</p>
			<Button variant="outlined" onClick={() => handleLogout()}>
				Logouts
			</Button>
		</div>
	);
};

export default Profile;
