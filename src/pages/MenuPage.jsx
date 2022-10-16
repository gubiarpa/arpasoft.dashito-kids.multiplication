import { useEffect, useState } from "react";
import { TableAllOptions } from "../components/TableAllOptions";
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
			tableCheckedArray.map(({ value }) => ({
				value,
				checked: !allTableSelected,
			}))
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
			<div className="container m-3">
				<TableAllOptions
					allTableSelected={allTableSelected}
					toggleAllChecked={toggleAllChecked}
				/>
				{tableCheckedArray.map(({ value, checked }) => (
					<TableOption
						key={value}
						num={value}
						checked={checked}
						toggleChecked={() => toggleChecked(value)}
					/>
				))}
			</div>
		</>
	);
};
