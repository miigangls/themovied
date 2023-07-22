import * as React from "react";
import { COLORS } from "../styles";
import { Button, Icon } from "@rneui/base";

const headerStyle = {
  headerStyle: {
    backgroundColor: '#000000',
    borderBottomWidth: 0,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0,
  },
  headerTitleAlign: "center",
  headerTintColor: COLORS.platform.white,
  headerTitleStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
};

interface  IHeaderNavigator { 
  navigation: () => void,
  title: string,
  routeRight: () => void,
  routeLeft: () => void,
  iconRight: string,
  iconLeft: string,
}

 const HeaderNavigator = ({routeLeft, routeRight, iconLeft, iconRight, title}:IHeaderNavigator) => {
  return {
    // eslint-disable-next-line react/display-name
    headerLeft: () => (
      <Button
        icon={
          <Icon name={iconLeft} size={20} type="font-awesome-5" color={COLORS.platform.black} />
        }
        type="clear"
        onPress={routeLeft}
      />
    ),
    title: title ? title : "",
    ...headerStyle,
    // eslint-disable-next-line react/display-name
    headerRight: () => (
      <Button
        icon={
          <Icon name={iconRight} size={20} type="font-awesome-5" color={COLORS.platform.black} />
        }
        type="clear"
        onPress={routeRight}
      />
    ),
  };
};

export default HeaderNavigator;