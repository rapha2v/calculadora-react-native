import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Button from "./src/components/Buttons";
import Display from "./src/components/Display";

type objobjCalculator = {
	displayDigit: string;
	operations: string | null;
	values: string[];
	current: number;
};

export default function App() {
	let [objCalculator, changeValues] = useState({
		displayDigit: "0",
		operations: null,
		values: ["0", "0"],
		current: 0,
	} as objobjCalculator);

	const addDigit = (n: string): void => {
		if (n === "." && objCalculator.displayDigit.includes(".")) {
			return;
		} else if (objCalculator.displayDigit === "0" && n !== ".") {
			objCalculator.values[objCalculator.current] = n;
			changeValues({ ...objCalculator, displayDigit: n });
		} else {
			objCalculator.values[objCalculator.current] = objCalculator.displayDigit + n;
			changeValues({ ...objCalculator, displayDigit: objCalculator.displayDigit + n });
		}
	};

	const clearMemory = (): void => {
		changeValues({
			operations: null,
			values: ["0", "0"],
			current: 0,
			displayDigit: "0",
		});
	};

	const setOperation = (operation: string): void => {
		if (objCalculator.current === 1 && objCalculator.operations !== null) {
			const op = checkOperation();
			changeValues({
				...objCalculator,
				values: [op, "0"],
				displayDigit: op,
				operations: null,
			});
		}

		changeValues((previousObj) => ({
			...previousObj,
			operations: operation,
			current: checkCurrentValue(),
		}));
		changeValues((previousObj) => ({
			...previousObj,
			displayDigit: previousObj.values[previousObj.current],
		}));
	};

	const checkOperation = (): string => {
		if (objCalculator.operations === "+") return soma();
		else if (objCalculator.operations === "-") return subtracao();
		else if (objCalculator.operations === "*") return multiplicacao();
		else return divisao();
	};

	const soma = (): string => {
		return String(parseInt(objCalculator.values[0]) + parseInt(objCalculator.values[1]));
	};

	const subtracao = (): string => {
		return String(parseInt(objCalculator.values[0]) - parseInt(objCalculator.values[1]));
	};

	const multiplicacao = (): string => {
		return String(parseInt(objCalculator.values[0]) * parseInt(objCalculator.values[1]));
	};

	const divisao = (): string => {
		return String(parseInt(objCalculator.values[0]) / parseInt(objCalculator.values[1]));
	};

	const checkCurrentValue = (): number => {
		if (objCalculator.current === 0) return 1;
		return 0;
	};

	return (
		<ScrollView>
			<View style={styles.container}>
				<StatusBar style="light" backgroundColor="rgba(0,0,0,0.6)" />
				<Display value={objCalculator.displayDigit} />
				<View style={styles.buttons}>
					{/* Passando para os o componente Button o que foi definido que seria passado na interface da props

					actionButton: () => void;
					textButton: string;
					*/}
					<Button textButton="AC" triple={true} actionButton={() => clearMemory()} />
					<Button textButton="/" operationButton={true} actionButton={() => setOperation("/")} />
					<Button textButton="7" actionButton={() => addDigit("7")} />
					<Button textButton="8" actionButton={() => addDigit("8")} />
					<Button textButton="9" actionButton={() => addDigit("9")} />
					<Button textButton="*" operationButton={true} actionButton={() => setOperation("*")} />
					<Button textButton="4" actionButton={() => addDigit("4")} />
					<Button textButton="5" actionButton={() => addDigit("5")} />
					<Button textButton="6" actionButton={() => addDigit("6")} />
					<Button textButton="-" operationButton={true} actionButton={() => setOperation("-")} />
					<Button textButton="1" actionButton={() => addDigit("1")} />
					<Button textButton="2" actionButton={() => addDigit("2")} />
					<Button textButton="3" actionButton={() => addDigit("3")} />
					<Button textButton="+" operationButton={true} actionButton={() => setOperation("+")} />
					<Button textButton="0" double={true} actionButton={() => addDigit("0")} />
					<Button textButton="." actionButton={() => addDigit(".")} />
					<Button textButton="=" operationButton={true} actionButton={() => setOperation("=")} />
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 41,
		flex: 1,
	},
	buttons: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
});
