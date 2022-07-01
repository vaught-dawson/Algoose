import Header from "./Components/Navbar/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/darkly/bootstrap.min.css";
import ProblemPage from "./Views/ProblemPage";
import Admin from "./Views/Admin"



import { Route, Routes } from "react-router-dom";
function App() {


	
	return (
		<div>
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<ProblemPage />
						</>
					}
				/>
				<Route path="/admin" element={<Admin />} />
			</Routes>
		</div>
	);
}

export default App;
