import React from 'react';
import { View, Image, Text,} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

import styles from './styles';
import logo from '../../assets/Nubank_Logo.png';

export default function Header() {
  return (
      <View style={styles.Container}>
        <View style={styles.Top}>
          <Image source={logo} />
          <Text style={styles.Title}>Danillo</Text>
        </View>
        <MaterialIcons 
          name="keyboard-arrow-down" 
          size={20} 
          color="#FFF" />
      </View>
  );
}