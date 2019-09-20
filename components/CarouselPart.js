import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CarouselPart extends React.Component{
    render(){
        return (
            <View style={styles.container_Carousel}>
                <Text>Carousel Part</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container_Carousel: {
      backgroundColor: 'red',
      height: 200

    }
  });


export default CarouselPart;