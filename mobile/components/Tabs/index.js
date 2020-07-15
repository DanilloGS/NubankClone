import React from 'react';
import { Animated, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

import styles from './styles';

export default function Tabs({translateY}) {
  return (
      <Animated.View style={[styles.Container, {
        transform: [{
          translateY: translateY.interpolate({
            inputRange:[0, 380],
            outputRange: [0, 30],
            extrapolate: 'clamp'
          })
        }],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp'
        })
      }]}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.TabContainer}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity style={styles.TabItem}>
            <MaterialIcons name="person-add" size={20} color="#FFF"/>
            <Text style={styles.TabText}>Indicar Amigos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TabItem}>
            <MaterialIcons name="chat-bubble-outline" size={20} color="#FFF"/>
            <Text style={styles.TabText}>Cobrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TabItem}>
            <MaterialIcons name="arrow-downward" size={20} color="#FFF"/>
            <Text style={styles.TabText}>Depositar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TabItem}>
            <MaterialIcons name="arrow-upward" size={20} color="#FFF"/>
            <Text style={styles.TabText}>Transferir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TabItem}>
            <MaterialIcons name="lock" size={20} color="#FFF"/>
            <Text style={styles.TabText}>Bloquear Cartão</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>
  );
}