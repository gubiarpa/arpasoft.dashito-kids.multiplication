import { useEffect, useState } from "react";
import { TableOption } from "../components/TableOption";
import { getFirstNumbersInArray } from "../utils/arrayMethods";

export const MenuPage = () => {
	const [allTableSelected, setAllTableSelected] = useState(false);
	const [tableCheckedArray, setTableCheckedArray] = useState([]);

	useEffect(() => {
		setTableCheckedArray(
			getFirstNumbersInArray(2, 12).map((num) => ({
				value: num,
				checked: false,
			}))
		);
	}, []);

	useEffect(() => {
		setAllTableSelected(
			tableCheckedArray.reduce(
				(previousChecked, { checked }) => previousChecked && checked,
				true
			)
		);
	}, [tableCheckedArray]);

	const toggleAllChecked = () => {
		setTableCheckedArray(
			tableCheckedArray.map(({ value }) => ({ value, checked: !allTableSelected }))
		);
	};

	const toggleChecked = (num) => {
		setTableCheckedArray(
			tableCheckedArray.map(({ value, checked }) => ({
				value,
				checked: value === num ? !checked : checked,
			}))
		);
	};

	return (
		<>
			<div className="form-check">
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
			{tableCheckedArray.map(({ value, checked }) => (
				<TableOption
					key={value}
					num={value}
					checked={checked}
					toggleChecked={() => toggleChecked(value)}
				/>
			))}
		</>
	);
};
