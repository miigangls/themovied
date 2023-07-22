import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  FlatList,
} from 'react-native';
import { Button, Typography } from "../components";
import { COLORS } from "../styles";
import { IPopular } from "../interfaces/popular.interface";

export default function RatedScreen(props: {title:string, data: IPopular}) {

  return (
    <View style={styles.ContainerPopular}>
        
        <View style={styles.item}>
            <Image
                source={{  uri:  `https://www.themoviedb.org/t/p/w220_and_h330_face/${props.data.backdrop_path}`  }}
                style={styles.itemPhoto}
                resizeMode="cover"
            />
            <View style={styles.ContainerDescription}>
                <Typography.Buttons message={props.data.original_name} color={COLORS.platform.white} />   
                 <Button.Secundary
                  title={"accept"}
                />
            </View>
            
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
  ContainerPopular: {
    gap: 10,
    display: "flex", 
    marginBottom: 15
  },
  item: {
    margin: 5,
    display: 'flex', 
    flexDirection: "row",
    width: 150,
    gap: 20,
    marginLeft:15,
    
  },
  itemPhoto: {
    width: 120,
    height: 140,
    borderRadius: 8
  },
  ContainerDescription: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
    display: "flex",
    gap: 10, 

  },
});