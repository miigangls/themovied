import React, { useContext, useState } from "react";
import { View, Text, KeyboardAvoidingView, Platform, ImageBackground } from "react-native";
import { Button, Alert,Typography } from "../components";

import { SignIn, Home } from "../styles";
import { PasswordInput } from "../components/passaword";
import { UsersInput } from "../components/usersInput";
import SessionProvider from "../api/session/context";

export default function  SignInScreen() {
  const { onLogin } = useContext(SessionProvider)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      style={SignIn.Container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      enabled
    >
      <ImageBackground
          style={Home.ImageBackground}
          source={{
            uri: "https://wallpaperaccess.com/full/1692037.jpg",
          }}
        >
          <View style={SignIn.ImageContainer}>
            <View style={SignIn.ContainerTitle}>
              <Typography.SubtitleMedium message="Welcome!" key={"Title"} />
            </View>
            <View style={SignIn.ContainerForm}>
              <View style={SignIn.ContainerFormHeader}>
                
              </View>
              <View style={SignIn.ContainerFormBody}>
                <UsersInput value={email} setValue={setEmail}  />
                <PasswordInput value={password} setValue={setPassword}  />
              </View>

              <View style={SignIn.ContainerButton}>
                <Button.Outline
                  title={"accept"}
                  onPress={() => onLogin(email, password)}
                />
              </View>
              
            </View>
          </View>
          
        </ImageBackground>
      
    </KeyboardAvoidingView>
  );
}
