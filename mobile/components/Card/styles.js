import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        maxHeight: 400,
        justifyContent: "center",
        zIndex: 5
    },
    Card: {
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 4,
        margin: '5%',
        height: 100,
        position:'absolute',
        left: 0,
        top: 0,
        right: 0,
        top: 380
    },
    CardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 30
    },
    CardContent: {
        flex: 1,
        paddingLeft: 30,
        justifyContent: 'center'
    },
    Title: {
        fontSize: 13,
        color: '#999',
    },
    Description: {
        fontSize: 32,
        marginTop: 3,
        color: '#333'
    },
    CardFooter: {
        padding: 30,
        backgroundColor: '#EEE',
        borderRadius: 4
    },
    Anotation: {
        fontSize: 12,
        color: '#333'
    },
});

export default styles;