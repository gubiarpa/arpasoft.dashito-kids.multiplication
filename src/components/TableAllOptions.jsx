export const TableAllOptions = ({
	allTableSelected = false,
	toggleAllChecked = () => {},
}) => {
	return (
		<>
			<div className="form-check p-2">
				<input
					className="form-check-input"
					type="checkbox"
					id={`all-tables`}
					checked={allTableSelected}
					onChange={() => toggleAllChecked()}
				/>
				<label className="form-check-label" htmlFor={`all-tables`}>
					Seleccionar todos
				</label>
			</div>
		</>
	);
};
