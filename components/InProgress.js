import React from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { CardsData } from '../constants/CardsData';



class InProgress extends React.Component{
    render(){
        return (
            <View style={{marginTop: 20}}>
                <Text style={styles.title}>In Progress</Text>
                <ScrollView horizontal={true}>
                    {
                        CardsData.map((card, index) => <Card text={card.text} img={card.img} key={index} />)
                    }
                </ScrollView>
            </View>
        );
    }
}




const Card = (props) => {
    const { img, text } = props;
    return (
        <View>
            <ImageBackground source={{uri: img}} style={styles.card} >
                <View style={{width: 50, height: 3, borderRadius: 10, backgroundColor: 'white', alignSelf:'flex-start'}}></View>
                <Text style={styles.card_text}> {text} </Text>
            </ImageBackground>
        </View>
       
    );
}


const styles = StyleSheet.create({
    card: {
      width: 140, height: 120,
      margin: 15,
      justifyContent: 'space-between',
      padding: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      backgroundColor: 'white',
      borderRadius: 6, overflow: 'hidden'
     
    },
    card_text: {
        color: 'white',
    },
    title: {
        fontSize: 14,
        textTransform: 'uppercase',
        marginLeft: 10, marginTop: 5,
        color: '#5e35b1',
        fontWeight: 'bold',
        letterSpacing: 2,
        fontFamily: 'space-mono'
    }
  });


export default InProgress;