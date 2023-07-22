import * as React from "react";
import { View, ImageBackground } from "react-native";
import { Typography, Button } from "../components";
import { Home } from "../styles/home";

export default function HomeScreen({navigation} : any) {
  return (
    <View style={Home.Container}>
      
        <ImageBackground
          style={Home.ImageBackground}
          source={{
            uri: "https://wallpaperaccess.com/full/1692037.jpg",
          }}
        >
          <View style={Home.ContainerImage}>
              <View style={Home.ContainerText} >
                <Typography.SubtitleMedium message="Welcome!" key={"Title"} />
              </View>
              <View style={Home.ContainerButton} >
                  <Button.Secundary onPress={() => navigation.navigate("SignUp")} title={"Sign Up"} />
                  <Button.Outline onPress={() => navigation.navigate("SignIn")} title={"Log In"} />
              </View>
            </View>
        </ImageBackground>
    </View>
  );
}