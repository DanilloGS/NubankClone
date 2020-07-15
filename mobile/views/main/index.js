import React from 'react';
import { View, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Card from '../../components/Card';
import Menu from '../../components/Menu';
import styles from './styles';

export default function Main () {
    const translateY = new Animated.Value(0);
    const animatedEvent = new Animated.event(
        [
          {
            nativeEvent: {
              translationY: translateY,
            }
          }
        ],
        {
          useNativeDriver: true
        }
    );

    return(
        <>
            <StatusBar style="inverted"/>
            <View style={styles.Container}>
                <Header/>
                <Card 
                    translateY={translateY} 
                    animatedEvent={animatedEvent}
                >
                    <Menu translateY={translateY}/>
                </Card>
                <Tabs/>
            </View>
        </>
    );
}