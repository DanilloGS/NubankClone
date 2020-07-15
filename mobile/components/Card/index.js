import React from 'react';
import { View, Text, Animated } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 
import { PanGestureHandler, State } from 'react-native-gesture-handler'

import styles from './styles';

export default function Card(props) {
  const onHandlerStateChange = event => {

  }

  return (
    <>
      <View style={styles.Container}>
        <PanGestureHandler
          onGestureEvent={props.animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Animated.View style={[styles.Card, 
          {
            transform:
            [
              {
                  translateY: props.translateY.interpolate({
                    inputRange: [-350,0,380],
                    outputRange: [-50, 0, 380],
                    extrapolate: 'clamp'
                  })
              }
            ]
          } ]}>
              <View style={styles.CardHeader}>
                    <MaterialIcons name="attach-money" size={24} color="black" />
                    <FontAwesome5 name="eye-slash" size={24} color="black" />
              </View>
              <View style={styles.CardContent}>
                    <Text style={styles.Title}>Saldo Disponível</Text>
                    <Text style={styles.Description}>12.000.000,00</Text>
                    <Text>{JSON.stringify(props.translateY)}</Text>
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