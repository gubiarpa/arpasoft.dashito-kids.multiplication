import { Route, Routes } from "react-router-dom";
import { MenuPage } from "./pages/MenuPage";
import { QuestionPage } from "./pages/QuestionPage";

function App() {
	return (
		<>
			<h1>Dashito Kids</h1>
			<hr />

			<Routes>
				<Route path="/" element={<MenuPage />} />
				<Route path="/question" element={<QuestionPage />} />
			</Routes>
		</>
	);
}

export default App;
