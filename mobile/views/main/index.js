import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Card from '../../components/Card';
import Menu from '../../components/Menu';
import styles from './styles';

export default function Main () {
    return(
        <>
            <StatusBar style="inverted"/>
            <View style={styles.Container}>
                <Header/>
                <Card>
                    <Menu/>
                </Card>
                <Tabs/>
            </View>
        </>
    );
}