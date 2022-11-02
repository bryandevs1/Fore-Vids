import { View, Text, StyleSheet, ImageBackground, Pressable, Alert } from 'react-native'
import React from 'react'
import bg from '../../../assets/images/2033396.jpg';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const IncomingCall = () => {

    const onDecline = () => {
        Alert.alert("Title", "Call Declined")
    }
    const onAccept = () => {
        Alert.alert("Title", "Call Accepted")
    }

  return (
    <View style={styles.root}>
        <ImageBackground source={bg} style={styles.image} resizeMode= 'cover'>
          <Text style={styles.name}>Phoebe ❤️</Text>
          <Text style={styles.number}>Incoming +234-810-997-3950</Text>
        
            <View style={[styles.row,{marginTop: 'auto'}]}>
                <View style={[styles.iconCont, {marginRight: 70}]}>
                    <Ionicons name='alarm' color={'white'} size={30} />
                    <Text style={styles.iconText}>Remind Me</Text>
                </View>
                <View style={styles.iconCont}>
                    <Entypo name='message' color={'white'} size={30} />
                    <Text style={styles.iconText}>Message</Text>
                </View>
            </View>
            <View style={styles.row}>
                <Pressable onPress={onDecline} style={[styles.iconCont, {marginRight: 70}]}>
                    <View style={styles.decacc}>
                    <MaterialIcons name='close' color={'white'} size={30} />
                    </View>
                </Pressable>
                <Pressable onPress={onAccept} style={styles.iconCont}>
                <View style={[styles.decacc, {backgroundColor: '#0096ff'}]}>
                    <MaterialIcons name='check-all' color={'white'} size={30} />
                    </View>
                </Pressable>
            </View>


        </ImageBackground>
    
    </View>
  )
}
const styles = StyleSheet.create ({ 
    root: {
        height: '100%'
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 70,
        marginBottom: 15,
    },
    number: {
        fontSize: 20,
        color: 'white'
    },
    image: {
flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20
    },
    iconCont: {
        alignItems: 'center',
        marginVertical: 30,
    },
    decacc: {
        padding:20,
        backgroundColor: 'red',
        borderRadius: 50,

    },
    iconText: {
        color: 'white'
    }

})

export default IncomingCall