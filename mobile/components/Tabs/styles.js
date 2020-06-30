import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Container: {
        height: 100,
        marginTop: 20,
        bottom: -50
    },
    TabContainer: {
        paddingLeft: 10,
        paddingRight: 20
    },
    TabItem: {
        width: 100,
        height: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 3,
        marginLeft: 10,
        padding: 10,
        justifyContent: "space-between"
    },
    TabText: {
        fontSize: 13,
        color: '#FFF'
    }
});

export default styles;