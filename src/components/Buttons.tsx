import React from "react";
import { StyleSheet, Text, Dimensions, TouchableHighlight, ViewStyle } from "react-native";

const style = StyleSheet.create({
	button: {
		fontSize: 40,
		//Pega a dimensão da tela(com a função Dimensions) e divide a largura por quatro formando um quadrado
		height: Dimensions.get("window").width / 4,
		width: Dimensions.get("window").width / 4,
		padding: 20,
		backgroundColor: "#f0f0f0",
		textAlign: "center",
		borderWidth: 1,
		borderColor: "#888",
	},
	operationButtons: {
		color: "#fff",
		backgroundColor: "#fa8231",
	},
	buttonDouble: {
		width: (Dimensions.get("window").width / 4) * 2,
	},
	buttonTriple: {
		width: (Dimensions.get("window").width / 4) * 3,
	},
});

interface propsButton {
	actionButton: () => void;
	textButton: string;
	operationButton?: Boolean;
	double?: Boolean;
	triple?: Boolean;
}

export default (props: propsButton) => {
	//Cria um array de estilos do tipo ViewStyle e verifica o tipo dos botões, atribuindo a eles o estilo correspondente
	const stylesButton: ViewStyle[] = [style.button];
	if (props.operationButton) stylesButton.push(style.operationButtons);
	if (props.double) stylesButton.push(style.buttonDouble);
	if (props.triple) stylesButton.push(style.buttonTriple);

	//exportando o component que espera receber uma prop do tipo propsButton
	return (
		<TouchableHighlight onPress={props.actionButton}>
			<Text style={stylesButton}>{props.textButton}</Text>
		</TouchableHighlight>
	);
};
