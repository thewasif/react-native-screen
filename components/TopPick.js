import React from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground } from 'react-native';


class TopPicks extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Top Picks</Text>
                    <ScrollView>
                        <MajorCard  
                            playTitle='Haloween Trivia' creator='Toni91' 
                            time={1} plays='3k' 
                            cover='https://images.pexels.com/photos/1449058/pexels-photo-1449058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        />
                        <MajorCard 
                            playTitle='Across Mountains' creator='spideyy' 
                            time={2} plays='1.1k' 
                            cover='https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        />
                        <MajorCard 
                            playTitle='In The Sky' 
                            creator='Sad1i' time={2} plays='1k' 
                            cover='https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        />

                    </ScrollView>
                </View>
            </View>
        );
    }
}

export const MajorCard = (props) => {
    const { playTitle, creator, time, plays, cover } = props;
    return (
        <View style={styles.card}>
            <ImageBackground source={{ uri: cover }} style={styles.cover} >
                <View style={styles.tag}>
                    <Text style={styles.major_card_text}>20 Questions</Text>
                </View>
            </ImageBackground>
            <View style={styles.body}>
                <View style={{ paddingRight: 10 }}>
                    <Text style={styles.text_big}>{playTitle}</Text>
                    <Text style={styles.text_small}>by {creator}</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={styles.text_small}>Created {time} year ago • {plays} plays</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 10
    },
    card: {
        width: '95%',
        alignSelf: 'center',
        shadowColor: "#4527a0",
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
        marginTop: 6,
        marginBottom: 8,
    },
    cover: {
        width: '105%', height: 120,
        justifyContent: 'flex-end',
        padding: 10,
    },
    body: {
        padding: 10,
        flex: 1,
        flexDirection: 'row',
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
    tag: {
        borderRadius: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignSelf: 'flex-end',
        padding: 10,
        marginRight: 15
    },
    major_card_text: {
        color: '#ffc107',
        fontSize: 12
    },
});


export default TopPicks;