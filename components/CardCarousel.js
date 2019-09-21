import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';



export default CardCarousel = (props) => {
    const { playTitle, creator, cover } = props;
    return (
        <View style={styles.card}>

            <ImageBackground source={{ uri: cover }} style={styles.cover} >
                <View style={styles.tag_featured}>
                    <Text style={{color: 'black'}}>FEATURED</Text>
                </View>
            </ImageBackground>

            <View style={styles.body}>
                <View style={{ paddingRight: 10 }}>
                    <Text style={styles.text_big}>{playTitle}</Text>
                    <Text style={styles.text_small}>by {creator}</Text>
                </View>
            </View>

        </View>
    );
}



const styles = StyleSheet.create({
    card: {
        width: '95%',
        alignSelf: 'center',
        shadowColor: "#4b27fa",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        backgroundColor: 'white',
        borderRadius: 6,
        overflow: 'hidden',
        marginTop: 10,
        marginBottom: 8,
    },
    cover: {
        width: '105%', height: 120,
        padding: 10,
    },
    body: {
        padding: 10,
        
        justifyContent: 'space-between'
    },
    text_big: {
        color: '#4527a0'
    },
    text_small: {
        fontSize: 10,
        color: 'rgba(0, 0, 0, 0.7)'
    },
    title: {
        fontSize: 14,
        textTransform: 'uppercase',
        marginLeft: 10, marginTop: 5, marginBottom: 5,
        color: '#5e35b1',
        fontWeight: 'bold',
        letterSpacing: 2
    },
    tag_featured: {
        borderRadius: 30,
        backgroundColor: 'yellow',
        color: 'white',
        alignSelf: 'flex-start',
        padding: 10,
        marginRight: 15
    },
    major_card_text: {
        color: '#ffc107',
        fontSize: 12
    },
});