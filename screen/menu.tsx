import React, {useEffect} from "react";
import {
  StyleSheet,
  View,
  SectionList,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { PopularScreen, RatedScreen, Typography } from "../components";
import { COLORS, Init } from "../styles";
import { useApi } from "../hooks/useApi";
import { getPopular } from "../api/getPopular";
import { getTopRated } from "../api/getTopRated";


export default function InitScreen() {
  const { execute: executePopular,  data: getDataPopular,  isLoading: isLoadingPopular   } = useApi(getPopular);
  const { execute: executeTopRated,  data: getDataTopRated, isLoading: isLoadingTopRated  } = useApi(getTopRated);

  useEffect (()=> {
    executePopular(getPopular);
    executeTopRated(getTopRated);
  }, [])
  
  return (
    <View style={Init.Container}>
      <View style={styles.container}>
        <StatusBar />
        <SafeAreaView style={{ flex: 1 }}>
        <SectionList
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            sections={[
              { 
                title: 'Popular',
                horizontal: true,
                data: getDataPopular?.results || [],
              }, 
              { 
                title: 'Recommendations',
                data: getDataTopRated?.results || []
              }
            ]}
            renderSectionHeader={({ section }) => (
                <>
                {section.horizontal && <View style={{display: "flex", gap: 10, flexDirection: "column",  width:'100%' }}>
                    <PopularScreen title={section.title} data={section.data} /> 

                    <View style={{display: "flex",  alignItems: "flex-end", height:35, width:'100%', paddingRight: 10, borderBottomWidth: 1, borderBottomColor: COLORS.brand.secondaryMain}}>
                        <Typography.Caption message="See All"  color={COLORS.brand.primaryMain} />
                    </View>

                    <View style={{display: "flex",  alignItems: "flex-start", height:50, width:'100%',}}>
                        <Typography.SubtitleMedium message="Recommendations"  color={COLORS.whiteBackground} />
                    </View>
                  </View>
                }
                  
                </>
            )}
            renderItem={({ item, section }) => {              
              if (section.horizontal) {
                return null;
              }
              return <RatedScreen data={item} />;
              
            }}
          />
        </SafeAreaView>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    width: "100%"
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },
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