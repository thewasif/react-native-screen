import React from 'react';
import { View, StyleSheet } from 'react-native';
import Carousel from 'simple-carousel-react-native';
import CardCarousel from '../components/CardCarousel'


class CarouselPart extends React.Component{
    render(){
        return (
            <View style={styles.container_Carousel}>
                <Carousel color='#8e24aa' height='100%' dimmedColor='white'  showScroll={false} >
                    <View>
                        <CardCarousel 
                        playTitle='Veterans Day' 
                        creator='Debbeistrazza' time={2} plays='1k' 
                        cover='https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        />
                    </View>
                    <View>
                    <CardCarousel 
                        playTitle='In The Sky' 
                        creator='Sad1i' time={2} plays='1k' 
                        cover='https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        />
                    </View>
                    
                </Carousel>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container_Carousel: {
        height: 200
    }
  });


export default CarouselPart;