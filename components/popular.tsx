import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  FlatList,
} from 'react-native';
import { Typography } from "../components";
import { COLORS, Init } from "../styles";
import { IPopular } from '../interfaces/popular.interface';
interface IPropsItem {
  imageUrl: string;
  name:string 
}

const ListItem = ({imageUrl, name }: IPropsItem) => {
  return (
    <View style={styles.item}>
      <Image
        source={{  uri: imageUrl }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Typography.Buttons message={name} />
    </View>
  );
};


export default function PopularScreen(props: {title:string, data: IPopular[]}) {
  return (
    <View style={styles.ContainerPopular}>
        <Typography.SubtitleMedium message={props.title} color={COLORS.platform.white} />
        <FlatList
            horizontal
            data={ props.data.map((rows) => ({ key: rows.id, text: rows.name, imageUrl: `https://www.themoviedb.org/t/p/w220_and_h330_face/${rows.poster_path}` }))}
            renderItem={( {item} ) => <ListItem key={item.key}  imageUrl={item.imageUrl} name={item.text} />}
            showsHorizontalScrollIndicator={false}
        />
    </View>
  );
}

const styles = StyleSheet.create({
 
  ContainerPopular: {
    gap: 20,
    display: "flex"
  },
  item: {
    margin: 5,
    display: 'flex', 
    width: 150,
    gap: 0,
    marginLeft:15,
    
  },
  itemPhoto: {
    width: 150,
    height: 250,
    borderRadius: 8
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },
});