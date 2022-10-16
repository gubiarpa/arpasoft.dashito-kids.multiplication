import { Route, Routes } from "react-router-dom";
import { MenuPage } from "./pages/MenuPage";

function App() {
	return (
		<>
			<h1>Dashito Kids</h1>
      <hr />

      <Routes>
        <Route path="/" element={<MenuPage />} />
      </Routes>
		</>
	);
}

export default App;
