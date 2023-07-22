import { StyleSheet } from "react-native";
import { COLORS } from "../vars";

export const Input = StyleSheet.create({
  containerStyle: {
    marginBottom: 5,
  },
  inputContainerStyle: {
    width: "100%",
    paddingTop: 5,
    paddingBottom: 5,
    height: 62,
    maxHeight: 62,
    flexDirection: "row",
    alignItems: "center",
    color: "#8C8C8C",
  },
  inputStyle: {
    height: 45,
    marginLeft: 16,
    flex: 1,
    color: "#8C8C8C",
    borderWidth: 0
  },
});
