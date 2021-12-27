import { Alert } from "@mui/material";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
	return (
		<div>
			<div>
				<p>hello app</p>
				<Outlet />
			</div>
		</div>
	);
};

export default ProtectedRoute;
