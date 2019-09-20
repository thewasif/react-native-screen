import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';


class TopPicks extends React.Component{
    render(){
        return (
            <View>
                <Text style={styles.title}>Top Picks</Text>
                <MajorCard />
            </View>
        );
    }
}



const MajorCard = () => {
    return (
        <View>
            <ImageBackground source={{uri: 'https://images.pexels.com/photos/3738/lamp-halloween-lantern-pumpkin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} style={styles.cover} >
                <View style={styles.tag}>
                    <Text style={styles.major_card_text}>20 Questions</Text>
                </View>
               
            </ImageBackground>
            <View>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    cover: {
        width: '94%', height: 120,
        margin: 15,
        justifyContent: 'flex-end',
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
    title: {
        fontSize: 14,
        textTransform: 'uppercase',
        marginLeft: 10, marginTop: 5,
        color: '#5e35b1',
        fontWeight: 'bold',
        letterSpacing: 2
    },
    tag: {
        borderRadius: 30, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        alignSelf: 'flex-end',
        padding: 10
    },
    major_card_text: {
        color: '#ff6f00'
    },
  });


export default TopPicks;