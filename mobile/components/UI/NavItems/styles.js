import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
});

export default styles;