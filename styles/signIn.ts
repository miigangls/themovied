import { StyleSheet } from "react-native";
import { COLORS } from "./vars";

export const SignIn = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.platform.darkBackgroundTransparent,
  },
  ImageContainer: {
    height: "100%",
    backgroundColor: COLORS.platform.darkBackgroundTransparentWrapper,
  },
  ContainerTitle: {
    width: "100%",
    height: "45%",
    alignItems: "center",
    justifyContent: "center",
  },
  ContainerForm: {
    flex: 1,
    alignContent:"center",
    backgroundColor: COLORS.platform.darkBackgroundTransparent,
    borderTopLeftRadius:40,
    borderTopRightRadius: 40,
  },
  ContainerFormHeader: {
    flex: 1,
    alignContent:"center",
  },
  ContainerFormBody: {
    alignContent:"center",
  },
  ContainerButton: {
    width: "100%",
    height: "20%",
    alignItems: "center",
  },
});
