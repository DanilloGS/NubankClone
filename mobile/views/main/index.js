import React from 'react';
import { View, Animated } from 'react-native';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Card from '../../components/Card';
import Menu from '../../components/Menu';
import styles from './styles';
import { State } from 'react-native-gesture-handler';

export default function Main () {
    let offset = 0; 
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
    const onHandlerStateChange = event => {
    if(event.nativeEvent.oldState === State.ACTIVE){
        const { translationY } = event.nativeEvent;
        let opened = false;
        offset += translationY;

        if(translationY >= 100){
        opened = true;

        } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
        }
        Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
        }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
        });
    }
    }

    return(
        <>
            <View style={styles.Container}>
                <Header/>
                <Card 
                    translateY={translateY} 
                    animatedEvent={animatedEvent}
                    onHandlerStateChange={onHandlerStateChange}
                >
                    <Menu translateY={translateY}/>
                </Card>
                <Tabs translateY={translateY}/>
            </View>
        </>
    );
}