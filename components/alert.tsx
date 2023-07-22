import React from "react";
import { View, Text } from "react-native";
import { Alert as AlertStyle, Typography, COLORS } from "../styles";

interface IAlertProps  {
  message: string
}

export const Alert = {
  // eslint-disable-next-line react/display-name
  error: ({ message }:IAlertProps) => (
    <View style={AlertStyle.error}>
      <Text style={{ ...Typography.caption, color: COLORS.platform.redMain, fontWeight: "bold" }}>
        {message}
      </Text>
    </View>
  ),
  // eslint-disable-next-line react/display-name
  success: ({ message }:IAlertProps) => (
    <View style={AlertStyle.success}>
      <Text style={{ ...Typography.caption, color: COLORS.platform.greenMain, fontWeight: "bold" }}>
        {message}
      </Text>
    </View>
  ),
  // eslint-disable-next-line react/display-name
  warning: ({ message }:IAlertProps) => (
    <View style={AlertStyle.warning}>
      <Text
        style={{ ...Typography.caption, color: COLORS.platform.yellowDark, fontWeight: "bold" }}
      >
        {message}
      </Text>
    </View>
  ),
};
