"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const Color_1 = require("./Color");
exports.RateModalStyles = react_native_1.StyleSheet.create({
	modalWrapper: {
		backgroundColor: "rgba(0,0,0,.5)",
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	bigButton: {
		width: 130
	},
	button: {
		backgroundColor: "#1963FF",
		// backgroundColor: Color_1.Color.LightGreen[600],
		flex: 0,
		fontWeight: "500",
		height: 40,
		marginHorizontal: 10,
		marginVertical: 5,
		minWidth: 70,
		paddingHorizontal: 5
	},
	buttonCancel: {
		// backgroundColor: Color_1.Color.Transparent
		backgroundColor: "#e8efff"
	},
	buttonCancelText: {
		color: Color_1.Color.Grey[500],
		letterSpacing: 1
	},
	buttonContainer: {
		alignItems: "center",
		alignSelf: "flex-end",
		flexDirection: "row",
		justifyContent: "center",
		marginVertical: 20,
		paddingHorizontal: 20
	},
	buttonText: {
		fontWeight: "500"
	},
	errorText: {
		paddingLeft: 20,
		color: Color_1.Color.Red[500]
	},
	modalContainer: {
		backgroundColor: Color_1.Color.White[500],
		borderRadius: 10,
		marginHorizontal: 20
	},
	textBox: {
		borderBottomColor: Color_1.Color.LightGreen[600],
		borderBottomWidth: 1,
		borderWidth: 0,
		margin: 20
	},
	title: {
		color: "#016099",
		fontSize: 20,
		fontWeight: "500",
		marginHorizontal: 30,
		marginVertical: 15,
		textAlign: "center"
	},
	subTitle: {
		color: "#1a6fa3",
		fontSize: 14,
		fontWeight: "500",
		marginHorizontal: 30,
		marginVertical: 5,
		textAlign: "center"
	}
});
//# sourceMappingURL=RateModal.js.map
