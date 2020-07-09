import React from 'react';
import { View, Text, Animated } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 
import { PanGestureHandler, State } from 'react-native-gesture-handler'

import styles from './styles';

export default function Card(props) {
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

  }

  return (
    <>
      <View style={styles.Container}>
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Animated.View style={[styles.Card, {transform:[{translateY: translateY}]} ]}>
              <View style={styles.CardHeader}>
                    <MaterialIcons name="attach-money" size={24} color="black" />
                    <FontAwesome5 name="eye-slash" size={24} color="black" />
              </View>
              <View style={styles.CardContent}>
                    <Text style={styles.Title}>Saldo Disponível</Text>
                    <Text style={styles.Description}>12.000.000,00</Text>
              </View>
              <View style={styles.CardFooter}>
                <Text style={styles.Anotation}>Lorem ipsum amet nostra, vehicula. </Text>
                <Text style={styles.Anotation}>Lorem ipsum tempus bibendum ultrices, phasellus velit. </Text>
              </View>
          </Animated.View>
        </PanGestureHandler>
      </View>
      {props.children}
    </>
  );
}