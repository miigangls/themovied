import React, { useState } from "react";
import { Input } from "@rneui/base";
import { Input as InputStyle } from "../styles";
import PropTypes from "prop-types";

const PROPS = {
  containerStyle: { ...InputStyle.containerStyle },
  inputContainerStyle: { ...InputStyle.inputContainerStyle },
  inputStyle: { ...InputStyle.inputStyle },
  placeholderTextColor: "#8C8C8C",
};

interface PropsTypes  {
  containerStyle?: object,
  inputContainerStyle?: object,
  inputStyle?: object,
  placeholderTextColor?: string,
  autoCapitalize?: string,
  value: string,
  setValue: (e: string )=> void,
};

export function PasswordInput(props: PropsTypes) {
  let { value, setValue } = props;
  return (
    <Input
      {...PROPS}
      value={value}
      onChangeText={setValue}
      placeholder={"password"}
      secureTextEntry={true}
    />
    
  );
}


