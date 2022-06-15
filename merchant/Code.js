import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.leftSide}>
                <View style={styles.left}>
                    <MaterialCommunityIcons name="line-scan" size={45} style={styles.iconL} />
                </View>

                <Text style={styles.leftText}>Scan QR Code or Barcode</Text>


            </View>

            <View style={styles.rightSide}>
                <View style={styles.right}>
                    <MaterialCommunityIcons name="cursor-text" size={45} style={styles.iconR} />
                </View>
                <Text style={styles.rightText}>Input Verification Code or Package Number</Text>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '22%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        bottom: 0,
    },

    leftSide: {
        flexDirection: 'row',
        padding: 5,
        width: '50%',
        height: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    left: {
        position: 'relative',
        width: '85%',
        height: '42%',
        margin: 15,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '20%',
        backgroundColor: '#b5d4ff',
    },

    iconL: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',

    },

    leftText: {
        textAlign: 'center',
        fontSize: 12,
        color: '#899092',
    },

    //right side styling 
    rightSide: {
        flexDirection: 'row',
        padding: 5,
        width: '50%',
        height: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    right: {
        width: '85%',
        height: '42%',
        margin: 15,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '20%',
        backgroundColor: '#b5d4ff',
    },

    iconR: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
    },

    rightText: {
        textAlign: 'center',
        fontSize: 12,
        color: '#899092',
    }



});