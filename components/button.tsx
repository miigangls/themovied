import React from "react";
import { Button as RNEButton, ButtonProps } from "@rneui/base";
import { Button as StleButton } from "../styles";

export interface IButtonProps extends ButtonProps {
    onPress: ()=> void
}

export const Button = {
  // eslint-disable-next-line react/display-name
  Primary: ({ onPress, title, disabled }: IButtonProps) => (
    <RNEButton
      disabled={disabled}
      onPress={() => onPress()}
      buttonStyle={StleButton.primary}
      titleStyle={StleButton.primaryText}
      disabledStyle={StleButton.disabledPrimary}
      disabledTitleStyle={StleButton.disabledPrimaryText}
      title={title}
    />
  ),
  // eslint-disable-next-line react/display-name
  Secundary: ({ title, disabled,  onPress }:IButtonProps) => (
    <RNEButton
      disabled={disabled}
      onPress={() => onPress()}
      buttonStyle={StleButton.secundary}
      titleStyle={StleButton.secundaryText}
      title={title}
    />
  ),
  Outline: ({ title, disabled,  onPress }:IButtonProps) => (
    <RNEButton
      disabled={disabled}
      onPress={() => onPress()}
      buttonStyle={StleButton.Outline}
      titleStyle={StleButton.outlineText}
      title={title}
    />
  ),
};