import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const style = StyleSheet.create({
	display: {
		flex: 1,
		padding: 20,
		justifyContent: "center",
		backgroundColor: "rgba(0,0,0,0.6)",
		alignItems: "flex-end",
		height: (Dimensions.get("window").width / 4) * 3 - 10,
	},
	displayValue: {
		fontSize: 60,
		color: "#fff",
	},
});

interface propsDisplay {
	value: string;
}

export default (props: propsDisplay) => {
	return (
		<View style={style.display}>
			<Text style={style.displayValue} numberOfLines={1}>
				{props.value}
			</Text>
		</View>
	);
};
