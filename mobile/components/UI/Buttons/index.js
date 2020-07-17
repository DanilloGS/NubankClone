import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Buttons({title}) {
  return (
    <TouchableOpacity style={styles.Button}>
        <Text style={styles.ButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}