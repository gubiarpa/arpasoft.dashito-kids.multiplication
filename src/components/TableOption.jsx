export const TableOption = ({
	num,
	checked = false,
	toggleChecked = () => {},
}) => {
	return (
		<div className="form-check fs-5 py-1">
			<input
				className="form-check-input"
				type="checkbox"
				id={`table-of-${num}`}
				value={num}
				checked={checked}
				onChange={toggleChecked}
			/>
			<label className="form-check-label" htmlFor={`table-of-${num}`}>
				Tabla del {num}
			</label>
		</div>
	);
};
