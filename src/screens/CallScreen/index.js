import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const CallingScreen = () => {
  return (
    <LinearGradient
    colors={['#4158D0', '#C850C0']}
    style={{height: '100%'}}>
    <View style={styles.page}>
        
        <View style={styles.cameraPre}>
      <Text style={styles.name}>Phoebe ❤️</Text>
      <Text style={styles.number}>ringing +234-810-997-3950</Text>

    
 
      </View>
        <View style={styles.buttons}>
            <View style={styles.icons}>
        <Ionicons name='camera-reverse' size={30} color={'white'}/>
      </View>
            <View style={styles.icons}>
        <MaterialIcons name='camera-off' size={30} color={'white'}/>
      </View>
            <View style={styles.icons}>
        <MaterialIcons name='microphone-off' size={30} color={'white'}/>
      </View>
            <View style={[styles.icons, {backgroundColor: 'red'}]}>
        <MaterialIcons name='phone-hangup' size={30} color={'white'}/>
      </View>
      </View>

    </View>
    </LinearGradient>
    
  )
}

const styles = StyleSheet.create ({
    page: {
        height: '100%',
        backgroundColor: 'rd'
    },
    cameraPre: {
        backgroundColor: 'rd',
        flex: 1,
        alignItems: 'center',
        paddingTop:20,
        paddingHorizontal: 10
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 50,
        marginBottom: 15,
    },
    number: {
        fontSize: 20,
        color: 'white'
    },
    buttons: {
        backgroundColor: '#333333',
        padding: 30,
        paddingBottom: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icons: {
        backgroundColor: '#4a4a4a',
        padding: 5,
        borderRadius: 40,
        
    }
});

export default CallingScreen