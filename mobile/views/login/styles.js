import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: '#8B10AE',
        justifyContent:'center',
        alignItems: 'center',
        padding: 60
    },
    Logo: {
        height: 120,
        width: 150,
        marginBottom: 10
    },
    TextInput: {
        alignSelf:'stretch',
        borderWidth: 0.5,
        borderColor:'#FFF',
        padding: 6,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        color: '#FFF',
        fontSize: 24,
        textAlign: 'center',
        borderRadius: 4,
        marginTop: '20%'
    },    
});

export default styles;