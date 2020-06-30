import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 

import styles from './styles';

export default function Card() {
  return (
      <View style={styles.Container}>
          <View style={styles.Card}>
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
          </View>
      </View>
  );
}