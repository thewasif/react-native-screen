import React from 'react';
import { View } from 'react-native';
import CarouselPart from '../components/CarouselPart';
import InProgress from '../components/InProgress';
import TopPicks from '../components/TopPick';


export default function HomeScreen() {
  return (
    <View>
      <CarouselPart />
      <InProgress />
      <TopPicks />
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'Title',
};


