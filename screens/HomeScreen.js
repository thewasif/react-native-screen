import React from 'react';
import { ScrollView, View, StatusBar, Image, TouchableOpacity, Text } from 'react-native';
import CarouselPart from '../components/CarouselPart';
import InProgress from '../components/InProgress';
import TopPicks from '../components/TopPick';


export default function HomeScreen() {
  return (
    <View>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
    <ScrollView>
      <CarouselPart />
      <InProgress />
      <TopPicks />
    </ScrollView>
    </View>
  );
}


class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={{uri: 'https://cdn4.iconfinder.com/data/icons/comic-colored/512/as_1003-256.png'}}
        style={{ width: 40, height: 30, marginLeft: 20}}
      />
    );
  }
}


HomeScreen.navigationOptions = {
  headerTitle: <LogoTitle />,
  headerRight: (
    <TouchableOpacity style={{backgroundColor: 'yellow', color:'black',shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5, paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20, borderRadius: 30, marginRight: 6}}>
      <Text>Master</Text>
    </TouchableOpacity>
  )
  
};

/*
title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    */


