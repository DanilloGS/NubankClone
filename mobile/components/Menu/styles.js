import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Container:{
        justifyContent: 'center',
        paddingLeft: 30,
        paddingRight: 30,
    },
    QrCode:{
        padding: 10,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent:'center',
        overflow: "hidden",
        marginBottom: 30,
    },
    Nav:{
        alignSelf: 'stretch',
        borderTopWidth: 0.5,
        borderColor: 'rgba(255,255,255,0.8)',
    },
    NavItem:{
        flexDirection: 'row',
        alignContent:'center',
        paddingTop: 10,
        borderBottomWidth: 0.5,
        borderColor: 'rgba(255,255,255,0.8)',
    },
    NavText: {
        fontSize:15,
        color: '#FFF',
        marginLeft: 10,
        marginBottom: 12
    },
    Button: {
        borderWidth: 0.5,
        borderColor: 'rgba(255,255,255,0.8)',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        alignSelf: 'stretch',
        marginTop: 15
    },
    ButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 13
    }
});

export default styles;