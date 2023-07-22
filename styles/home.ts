import { StyleSheet } from "react-native";
import { COLORS } from "./vars";

export const Home = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "column",
  },
  ContainerImage: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.platform.darkBackgroundTransparentWrapper,
  },
  ContainerText: {
    width: "100%",
    height: "40%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  ImageBackground: {
    width: "100%",
    height: "100%",
  },
  ContainerButton: {
    width: "100%",
    height: "60%",
    alignItems: "center",
    justifyContent: "flex-start", 
    gap: 30
  },
});