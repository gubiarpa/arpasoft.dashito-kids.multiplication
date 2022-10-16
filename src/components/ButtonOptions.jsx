import { useNavigate } from "react-router-dom";

export const ButtonOptions = () => {
	const navigate = useNavigate();

	return (
		<>
			<button
				type="button"
				className="btn btn-outline-primary fs-5 my-4"
				onClick={() => navigate("/question")}
			>
				Empezar
			</button>
		</>
	);
};
