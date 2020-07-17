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
});

export default styles;