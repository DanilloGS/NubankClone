import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Buttons({title, onPress}) {
  return (
    <TouchableOpacity style={styles.Button} onPress={onPress}>
        <Text style={styles.ButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}