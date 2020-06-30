import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight + 20,
        paddingBottom: 30
    },
    Top: {
        flexDirection: 'row',
        alignItems:"center",
        marginBottom: 10
    },
    Title:{
        fontSize: 18,
        color :'#FFF',
        fontWeight: "bold",
        marginLeft: 8
    }
});

export default styles;